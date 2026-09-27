export const name="head-circuit-light";
export const id="dl_405cdcb687c34a1cb3c5";
export const url=new URL("../icons/head-circuit-light.svg?v=86694e21513a5598a1309162ee7426359fb21f014e3f70a6ab9d28bf004eb701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
