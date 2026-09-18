export const name="switch_video";
export const id="dl_c8ed05d254814be0af13";
export const url=new URL("../icons/switch_video.svg?v=6f8669fc4b17501b87ebd7f6df79e66d42deeaa9c5d840eaad26d378a5de0cff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
