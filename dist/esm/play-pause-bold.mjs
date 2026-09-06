export const name="play-pause-bold";
export const id="dl_f872186e3293446bbe9b";
export const url=new URL("../icons/play-pause-bold.svg?v=15c9f76d38d2101d28bde8780f74435521895ccb321841ff4e967d5a905a0fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
