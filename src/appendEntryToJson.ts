import fs from 'fs';

export const appendEntryToJson = (path: string, entry: any) => {
    const fileContents = fs.readFileSync(path, 'utf8');
    const data = JSON.parse(fileContents);
    data.push(entry);

    const updateData = JSON.stringify(data);
    fs.writeFileSync(path, updateData);
}
