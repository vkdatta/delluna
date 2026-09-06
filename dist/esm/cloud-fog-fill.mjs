export const name="cloud-fog-fill";
export const id="dl_d33db3d5847a496b8aa8";
export const url=new URL("../icons/cloud-fog-fill.svg?v=16351368ded3dbee039f6423d797dad20833a42f17569595ad702cbfd3a87829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
