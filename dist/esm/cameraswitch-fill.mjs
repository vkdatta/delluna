export const name="cameraswitch-fill";
export const id="dl_ffd3153092e5396d5829";
export const url=new URL("../icons/cameraswitch-fill.svg?v=f4e462c405b63e23a2a593ee8ee6dbf7f5f707e90b99619c40f3f6c4a4df0c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
