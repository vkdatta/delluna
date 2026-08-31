export const name="chev";
export const id="dl_0554a62a9cbcd41ab805";
export const url=new URL('../icons/chev.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
