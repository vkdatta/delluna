export const name="enable-fill";
export const id="dl_f1dc5ff146f94a090f61";
export const url=new URL("../icons/enable-fill.svg?v=4c757c263a6d69281f0858e75a84c4bcdeba53e9952993f35251c1b7eb9c7304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
