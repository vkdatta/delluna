export const name="spade-fill";
export const id="dl_ccce68e04cf74e109a9d";
export const url=new URL("../icons/S/spade-fill.svg?v=e8fd0f8c4c0d6465f7091dc3b9c0135ba17779907968c176c422d29ea105c492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
