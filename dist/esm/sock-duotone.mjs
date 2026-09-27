export const name="sock-duotone";
export const id="dl_82e7945b44a9b132e5f9";
export const url=new URL("../icons/sock-duotone.svg?v=3710b95e981254d1f5c3d50f3355e3ca18dd92a6b58e07e32600b9ee87f8f9fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
