export const name="lucid_3-network";
export const id="dl_295e7bab9bdd4c1e8e43";
export const url=new URL("../icons/lucid_3-network.svg?v=7c96334c2a33f5f3f3110bcf9bf5eb112f6830036d996c32cc071777a8bdce6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
