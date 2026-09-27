export const name="audio_video_receiver-fill";
export const id="dl_1d5e8155bd7a29972b91";
export const url=new URL("../icons/audio_video_receiver-fill.svg?v=b0545670fa446b6414e91667b1283d73752e16e7f0b26a6836618c6bd835cfb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
