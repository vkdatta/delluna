export const name="paste";
export const id="dl_445434bff2fc67acf7e7";
export const url=new URL('../icons/paste.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
