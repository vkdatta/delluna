export const name="arrow_back";
export const id="dl_d25f1fe91c87871d603b";
export const url=new URL('../icons/arrow_back.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
