export const name="arrow-square-in-duotone";
export const id="dl_f3ca522121b043dcad98";
export const url=new URL("../icons/arrow-square-in-duotone.svg?v=532e2c32df059cefbc3a9d2ee8a2ed6871fb444793ccf536609f73131c7339c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
