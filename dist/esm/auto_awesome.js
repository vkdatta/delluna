export const name="auto_awesome";
export const id="dl_7cbe64e0fe7ee1e8b300";
export const url=new URL('../icons/auto_awesome.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
