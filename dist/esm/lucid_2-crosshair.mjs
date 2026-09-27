export const name="lucid_2-crosshair";
export const id="dl_70ff1b80e0004e43af31";
export const url=new URL("../icons/lucid_2-crosshair.svg?v=e22bf67668a4c2f4f08fafb8463c4bb6431930329f64515f90af43c74b4f7a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
