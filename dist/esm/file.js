export const name="file";
export const id="dl_cd68687aa5572e33c917";
export const url=new URL('../icons/file.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
