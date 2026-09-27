export const name="7k-fill";
export const id="dl_e7ea1e0e5d6666f538cf";
export const url=new URL("../icons/7k-fill.svg?v=841255f1fbba31abf660c7c1e5087b4b8f0030fe8daaebbe8be4a2c20ed900cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
