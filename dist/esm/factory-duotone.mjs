export const name="factory-duotone";
export const id="dl_718736363516437f96dc";
export const url=new URL("../icons/factory-duotone.svg?v=d61fc68c73d7cedf99cd87887b40efb2c4df7531a9db57b9bc3180a323354197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
