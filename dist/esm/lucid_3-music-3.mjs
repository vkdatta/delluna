export const name="lucid_3-music-3";
export const id="dl_4b07387d1e874b00be03";
export const url=new URL("../icons/lucid_3-music-3.svg?v=72df54f9ec7cf4d0bb376cad0c19498e300d443469409e8131e201b8705076ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
