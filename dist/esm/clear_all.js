export const name="clear_all";
export const id="dl_b7f4f6e685a6d9c721a4";
export const url=new URL('../icons/clear_all.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
