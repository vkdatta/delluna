export const name="encrypted";
export const id="dl_f79be6f6ae07eea91725";
export const url=new URL('../icons/encrypted.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
