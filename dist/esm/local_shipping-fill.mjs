export const name="local_shipping-fill";
export const id="dl_59a4624bcbf0350a070d";
export const url=new URL("../icons/local_shipping-fill.svg?v=c78278740c01aefafd2c6d697d2b592ae430979a852a43f50e778f982cb27600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
