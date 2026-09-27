export const name="wb_shade-fill";
export const id="dl_ad115d62e902a9e5d8cd";
export const url=new URL("../icons/wb_shade-fill.svg?v=a06b1c22330e328db54c3e3e529d9369d70ada4744633e7150195bfb5216cb85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
