export const name="general_device";
export const id="dl_30d246de46c30350381c";
export const url=new URL("../icons/general_device.svg?v=5e3d202d0e0f01ada9b60a558ed6ad3beb0fa37ef2ff23a4ef54034fc5516382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
