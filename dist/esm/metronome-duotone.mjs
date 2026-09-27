export const name="metronome-duotone";
export const id="dl_52ed497e98f24387a30d";
export const url=new URL("../icons/metronome-duotone.svg?v=5fb1ed482afff70195da73157b268d8f0348bbb72bdbcd136de087422320e0ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
