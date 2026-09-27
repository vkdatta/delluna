export const name="pageview";
export const id="dl_a332b3b00af564321d7b";
export const url=new URL("../icons/pageview.svg?v=0156b1d6566ba2ea4af8689b8a2bdb61ddcd9cf19a02716bd0aa65ef6ec43682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
