export const name="hub";
export const id="dl_c9e361cd2ecef764682a";
export const url=new URL('../icons/hub.svg',import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
