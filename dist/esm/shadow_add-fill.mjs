export const name="shadow_add-fill";
export const id="dl_5902e0c3e9299f7e37cb";
export const url=new URL("../icons/shadow_add-fill.svg?v=f0fe2d4377c5529d7e0df8570d7e5f555c767fdfc8f5c90a5f4667884f679e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
