export const name="uppercase";
export const id="dl_e6709b38f36451af6b79";
export const url=new URL('../icons/uppercase.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
