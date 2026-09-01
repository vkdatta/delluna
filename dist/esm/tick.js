export const name="tick";
export const id="dl_57f503dee03c4a4aac79";
export const url=new URL('../icons/tick.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
