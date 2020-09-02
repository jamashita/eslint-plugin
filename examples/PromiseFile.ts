import fs from 'fs';

export class PromiseFile {
  public read(path: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fs.readFile(path, (err: NodeJS.ErrnoException | null, data: Buffer) => {
        if (err !== null) {
          reject(err);

          return;
        }

        resolve(data.toString('utf-8'));
      });
    });
  }

  public write(path: string, data: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.writeFile(path, data, (err: NodeJS.ErrnoException | null) => {
        if (err !== null) {
          reject(err);

          return;
        }

        resolve();
      });
    });
  }
}
