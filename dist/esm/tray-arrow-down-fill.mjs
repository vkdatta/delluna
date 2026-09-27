export const name="tray-arrow-down-fill";
export const id="dl_c6c93bfb428705a47173";
export const url=new URL("../icons/tray-arrow-down-fill.svg?v=3f436a5d47abb5c0ddc2a58b258770080cbaf3a87f8089f1d1cc46bc63090005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
