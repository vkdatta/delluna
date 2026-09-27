export const name="mobile_camera-fill";
export const id="dl_a6408a751f1384ced57a";
export const url=new URL("../icons/mobile_camera-fill.svg?v=a129690be337ee9048bea09334088583cc44c8a4928f82ed271438151565d9d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
