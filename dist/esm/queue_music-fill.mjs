export const name="queue_music-fill";
export const id="dl_594f0a68fa3777d2cd13";
export const url=new URL("../icons/queue_music-fill.svg?v=81816dd4b45f7493adb1d2609ff968e7c0b3163b3f7e8130cf3da19b6a8ee489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
