export const name="music_cast-fill";
export const id="dl_c47f7ef9308bf81e341b";
export const url=new URL("../icons/music_cast-fill.svg?v=e4a5893f16cc02c3dd8db274672192c7c03c37bf53cbc1bf83ef122d35cb21b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
