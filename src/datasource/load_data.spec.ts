import {loadFile} from './load_data';
import {readFileSync} from 'fs';
import {Blob} from 'buffer';

describe('loadFile', () => {
  global.URL.createObjectURL = jest.fn();

  it('loads GEDCOM file', async () => {
    const file = readFileSync('src/datasource/testdata/test.ged');
    const blob = new Blob([file]);
    const {gedcom, images} = await loadFile(blob);
    expect(gedcom.length).toBe(4408);
    expect(images).toEqual(new Map());
  });

  it('loads GEDZIP file', async () => {
    const file = readFileSync('src/datasource/testdata/test.gdz');
    const blob = new Blob([file]);
    const {gedcom, images} = await loadFile(blob);
    expect(gedcom.length).toBe(4408);
    expect(images.size).toBe(1);
  });
});