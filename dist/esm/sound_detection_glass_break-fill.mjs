export const name="sound_detection_glass_break-fill";
export const id="dl_2c23a1e65a6fe3126266";
export const url=new URL("../icons/sound_detection_glass_break-fill.svg?v=1aa6c0671de022fbb1ea0e8a6987eda967b5ea7d856ecc75ef6ede64d0d30376",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
