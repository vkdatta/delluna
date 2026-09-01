export const name="search";
export const id="dl_ddd4bb51c362da338c39";
export const url=new URL('../icons/search.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
