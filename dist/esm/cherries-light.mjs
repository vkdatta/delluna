export const name="cherries-light";
export const id="dl_19b0f326dfa34c8491cb";
export const url=new URL("../icons/cherries-light.svg?v=cdde47f128981c7bf88ed577ab2939ed39443dc8142c9d1d8dc37c2ce398cc08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
