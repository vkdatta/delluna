export const name="subdirectory_arrow_left-fill";
export const id="dl_a93ce07c03fdb101702f";
export const url=new URL("../icons/subdirectory_arrow_left-fill.svg?v=971093d0f4edd08be21472d0b5f02456fcedaeb83284dbb514f292acb3dca9d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
