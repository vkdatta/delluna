export const name="download";
export const id="dl_276c17f5a91c18895f3d";
export const url=new URL('../icons/download.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
