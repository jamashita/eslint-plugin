import fs from 'fs';

export class PromiseFile {
  public async read(path: string): Promise<string> {
    const buf: Buffer = await fs.promises.readFile(path);

    return buf.toString('utf-8');
  }

  public write(path: string, data: string): Promise<void> {
    return fs.promises.writeFile(path, data);
  }
}
