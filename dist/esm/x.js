export const name="x";
export const id="dl_b381d6b75a2d10470864";
export const url=new URL('../icons/x.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
