export const name="spatial_audio_off";
export const id="dl_d27ecce82d585002c4bf";
export const url=new URL("../icons/spatial_audio_off.svg?v=b9ab72b60b8c00e38cf23cbd7c5fc1cb4c4fc170128e1d878d862bf33877580f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
