export const name="lucid_1-circle-chevron-up";
export const id="dl_4c4d7ba81b574c93b5df";
export const url=new URL("../icons/lucid_1-circle-chevron-up.svg?v=886c9ce671629c651509c4ed3f376e9709e1af98149537cc4200408947d2cac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
