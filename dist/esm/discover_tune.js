export const name="discover_tune";
export const id="dl_c108d45eaa3cb5ecb4e8";
export const url=new URL('../icons/discover_tune.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
