export const name="dock_to_right-fill";
export const id="dl_1c9e50ecd6e6745fa0b3";
export const url=new URL("../icons/dock_to_right-fill.svg?v=f6171ff2987f31bab613eb0aa08114c15510e2e56182e83968a7ac71b258e082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
