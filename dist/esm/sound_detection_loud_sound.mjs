export const name="sound_detection_loud_sound";
export const id="dl_43e5da309e904691b696";
export const url=new URL("../icons/S/sound_detection_loud_sound.svg?v=94723a6485b2af2134440409547e670702f7490e3de98ca5f03b75c78a05bfdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
