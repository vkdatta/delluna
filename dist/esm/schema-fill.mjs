export const name="schema-fill";
export const id="dl_25e1b01a3e2f45a89dbb";
export const url=new URL("../icons/schema-fill.svg?v=ba2df8880c2ae72f6ec7ec337a220c86f2d3b74c6d2df1fcecde196794a84399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
