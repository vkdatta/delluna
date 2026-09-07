export const name="traffic-signal-fill";
export const id="dl_1cebd0ac7d9c4aafb322";
export const url=new URL("../icons/T/traffic-signal-fill.svg?v=194fca8eb2328ae47e07246ad1d5ad4812ae60913e90092c666717716e725b88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
