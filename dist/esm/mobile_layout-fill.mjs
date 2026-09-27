export const name="mobile_layout-fill";
export const id="dl_e3930180994ac008e086";
export const url=new URL("../icons/mobile_layout-fill.svg?v=d85b12548297466149770b3b78bb15fb37176285d8da7c70e5292765ce9f99d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
