export const name="flyover-fill";
export const id="dl_caf03420dbb2b2cce787";
export const url=new URL("../icons/flyover-fill.svg?v=ad96199d675329b46679f180bd5f8048dbd08bf2703930e56358d1e586b44cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
