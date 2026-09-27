export const name="sound_detection_loud_sound-fill";
export const id="dl_8caa11223cde1f96ce76";
export const url=new URL("../icons/sound_detection_loud_sound-fill.svg?v=103416672feca82081b46b733d30b3bdbc4e42f968f98b215e738e695053333c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
