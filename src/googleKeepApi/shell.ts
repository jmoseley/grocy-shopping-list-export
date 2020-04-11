import shell from 'shelljs'

export async function executeCommand<T>(script: string, ...params: string[]): Promise<T> {
    return new Promise((resolve, reject) => {
        shell.exec(`${script} ${params.join(' ')}`, (code, stdout, _stderr) => {
            if (code != 0) {
                reject(new Error(`Script exited with code ${code}.`));
            } else {
                try {
                    resolve(JSON.parse(stdout));
                } catch (error) {
                    reject(new Error(`Result is not valid JSON. ${stdout}`))
                }
            }
        })
    })
}