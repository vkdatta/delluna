export const name="lucid_2-door-closed";
export const id="dl_d84f441a5ac247228dcb";
export const url=new URL("../icons/lucid_2-door-closed.svg?v=cdc632594d283e14faa5f28cb8ac262dd8fb167c98716d1f81fb3a2ec98d3e03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
