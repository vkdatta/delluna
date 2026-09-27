export const name="mobile_camera";
export const id="dl_442795a5ba9f8b8c580b";
export const url=new URL("../icons/mobile_camera.svg?v=1270ec84e2f1e79404f49f5f37af7bf8eacd10a0306e663a0a2c2ac54c2dd197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
