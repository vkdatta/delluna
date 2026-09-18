export const name="spatial_audio_off";
export const id="dl_622b89a233194878a688";
export const url=new URL("../icons/spatial_audio_off.svg?v=8f373a4ffdf0b5b4f945eee0b7cb1856d20d03823713610e2eddd871cb8dd470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
