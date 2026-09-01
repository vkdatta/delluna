export const name="bolt";
export const id="dl_ebe8e6b27c85e655141c";
export const url=new URL('../icons/bolt.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
