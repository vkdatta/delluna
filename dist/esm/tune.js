export const name="tune";
export const id="dl_163a91981ed8ea261072";
export const url=new URL('../icons/tune.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
