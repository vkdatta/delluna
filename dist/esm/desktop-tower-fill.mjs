export const name="desktop-tower-fill";
export const id="dl_00d48adf83c24a4db732";
export const url=new URL("../icons/desktop-tower-fill.svg?v=58adaf3d878793f364b67def651df659908605cf8447039bd5482f6a74ef436f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
