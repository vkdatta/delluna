export const name="plus";
export const id="dl_217bda60a5aa7e5f4edd";
export const url=new URL('../icons/plus.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
