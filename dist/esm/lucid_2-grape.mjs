export const name="lucid_2-grape";
export const id="dl_2905e7d009344883b005";
export const url=new URL("../icons/lucid_2-grape.svg?v=286816f14b1075cbeea43ca4087075cd206f36de3a5614bfa12c2360111ae395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
