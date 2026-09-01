export const name="info";
export const id="dl_308523e5cf143553e4fb";
export const url=new URL('../icons/info.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
