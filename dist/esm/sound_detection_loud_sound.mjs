export const name="sound_detection_loud_sound";
export const id="dl_c812da354e4728ea54f5";
export const url=new URL("../icons/sound_detection_loud_sound.svg?v=15babb78a1fbe34599a4c2b4bad1889e935bc354223fcca8a518f41328854148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
