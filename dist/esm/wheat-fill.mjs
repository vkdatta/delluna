export const name="wheat-fill";
export const id="dl_c33fb4ef8bf5d3671208";
export const url=new URL("../icons/wheat-fill.svg?v=c0e64bc0c39da0e5c4d28ea1e562376ec68b3f714b6d3e1202baa1e9ac2e4c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
