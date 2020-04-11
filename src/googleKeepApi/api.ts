// Wrapper around the python gkeepapi
import { executeCommand } from './shell';

const BASE_URL = 'src/googleKeepApi/python';

export class GoogleKeepApi {
    constructor(private readonly username: string, private readonly password: string) {
    }

    // public async init() {
    //     await this.login();
    // }

    public async findNote(label: string): Promise<NoteSearchResult[]> {
        return await executeCommand<NoteSearchResult[]>(this.getScriptPath('findNote'), this.username, this.password, label);
    }

    public async addItems(noteId: string, items: string[]) {
        await executeCommand(this.getScriptPath('addItems'), this.username, this.password, noteId, ...items);
    }

    // private async login() {
    //     return await executeCommand(this.getScriptPath('login'), this.username, this.password);
    // }

    private getScriptPath(scriptName: string) {
        return `${BASE_URL}/${scriptName}.py`;
    }
}

export interface NoteSearchResult {
    id: string;
    title: string;
}