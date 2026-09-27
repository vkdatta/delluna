export const name="mobile_sound_2-fill";
export const id="dl_270ae0d624a0bc391cfd";
export const url=new URL("../icons/mobile_sound_2-fill.svg?v=fa369e0002ab3de343c14681f6c23e8d5f24fa09b25feda96fa4d4d3e08053e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
