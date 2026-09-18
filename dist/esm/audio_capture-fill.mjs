export const name="audio_capture-fill";
export const id="dl_10dedceccc094ad39e33";
export const url=new URL("../icons/audio_capture-fill.svg?v=9b03bda085187dc7e02ba6f32f3911ed05cb9b968fc32495426db3867d50333c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
