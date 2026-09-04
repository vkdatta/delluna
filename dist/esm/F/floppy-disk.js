export const name="floppy-disk";
export const id="dl_39fde0b952814fb0880d";
export const url=new URL("../../icons/F/floppy-disk.svg?v=067b385ee62469be500d2d5bcd10e2aedd7529cd615ed180fa8414aaef0e40ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
