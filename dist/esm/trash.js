export const name="trash";
export const id="dl_5827698eb5c1e796076f";
export const url=new URL('../icons/trash.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
