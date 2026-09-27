export const name="faders";
export const id="dl_ca3daa7feb6d4a3d862c";
export const url=new URL("../icons/faders.svg?v=c5058f7ec77e6d98d8538ed210b0326b772f7468f64f7319da632e15c9460270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
