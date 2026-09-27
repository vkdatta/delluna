export const name="vaping_rooms-fill";
export const id="dl_363ad49b4fa3e16b0d11";
export const url=new URL("../icons/vaping_rooms-fill.svg?v=f0f776a14764d5952e726ea65ccced4917d05f50492e00fe6cbc8084cf213fdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
