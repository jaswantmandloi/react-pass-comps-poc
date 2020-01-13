/**
 * https://mkyong.com/git/git-how-to-list-committed-files-that-are-going-to-push/

https://www.npmjs.com/package/execa

jest --findRelatedTests src/components/Input.js src/__tests__/components/Container.js
 */

const debug = require('debug')('lint-staged:git')
const execa = require('execa')
const normalize = require('normalize-path')

async function execGit (cmd, options = {}) {
  debug('Running git command', cmd)
  const { stdout } = await execa('git', [].concat(cmd), {
    ...options,
    cwd: options.cwd || process.cwd()
  })
  return stdout
}

async function execJest (cmd, options = {}) {
  debug('Running jest command', cmd)

  execa('echo', ['unicorns']).stdout.pipe(process.stdout)

  // const { stdout } = await execa('echo', ['unicorns'])
  // return stdout
}

async function resolveGitDir (options = {}) {
  try {
    // git cli uses GIT_DIR to fast track its response however it might be set to a different path
    // depending on where the caller initiated this from, hence clear GIT_DIR
    delete process.env.GIT_DIR
    const gitDir = await execGit(['rev-parse', '--show-toplevel'], options)
    return normalize(gitDir)
  } catch (error) {
    return null
  }
}

async function getStagedFiles (options) {
  try {
    const lines = await execGit(
      ['diff', '--staged', '--diff-filter=ACMR', '--name-only'],
      options
    )
    return lines ? lines.split('\n') : []
  } catch (error) {
    return null
  }
}

async function getCommitedFiles (options) {
  try {
    const lines = await execGit(
      [
        'show',
        '363d2924690bb839f1c12a97381689ee75c96421',
        '--diff-filter=ACMR',
        '--name-only'
      ],
      options
    )
    return lines ? lines.split('\n') : []
  } catch (error) {
    return null
  }
}

async function checkTests (options) {
  try {
    // const lines = await execJest(
    //   // ['--findRelatedTests', 'src/components/Input.js'],
    //   // options
    // )

    execa('react-scripts', [
      'test',
      '--findRelatedTests',
      'src/components/Input.js'
    ]).stdout.pipe(process.stdout)

    // return lines
  } catch (error) {
    return null
  }
}

async function runAll () {
  const cwd = process.cwd()
  const gitDir = await resolveGitDir({ cwd })

  // const files = await getCommitedFiles({ cwd: gitDir })

  // console.log('files', files)

  const files = await checkTests({ cwd: gitDir })

  // console.log('files', files)

  // 'jest --findRelatedTests path/to/fileA.js path/to/fileB.js'
}

runAll()

// const jest = require('jest-cli/build/cli')
// jest
//   .runCLI({ json: false }, [process.cwd()])
//   .catch(error => {
//     console.log('Error:')
//     console.log(error)
//   })
//   .then(() => {
//     console.log('Done')
//   })
