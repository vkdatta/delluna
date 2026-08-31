export const name="bookmark";
export const id="dl_a93eb90c9c75e18b3a87";
export const url=new URL('../icons/bookmark.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
