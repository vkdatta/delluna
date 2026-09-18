export const name="humidity_low-fill";
export const id="dl_69169e89cb1a464ea08e";
export const url=new URL("../icons/humidity_low-fill.svg?v=637fc713ed47e1e05823a7ce3d21b0d70fa536574e93d6bdc22735d124660a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
