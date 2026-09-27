export const name="g_mobiledata-fill";
export const id="dl_8a7a4f85fcbe6c9f11db";
export const url=new URL("../icons/g_mobiledata-fill.svg?v=ce98ea50eeea5aefd11be7db9756444a4c51a3008e689d2e381465cebfb89f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
