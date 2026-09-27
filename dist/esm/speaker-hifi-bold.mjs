export const name="speaker-hifi-bold";
export const id="dl_0ec5fcb5e9a8e40ec401";
export const url=new URL("../icons/speaker-hifi-bold.svg?v=8aaba89e44438bab20d973b134c4b089dc5255e0f7197c396dfb65499004e7f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
