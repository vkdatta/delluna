export const name="person";
export const id="dl_57ec802ce93569710a00";
export const url=new URL('../icons/person.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
