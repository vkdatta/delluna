export const name="sound_detection_glass_break";
export const id="dl_c155e0cd599ddd628af0";
export const url=new URL("../icons/sound_detection_glass_break.svg?v=f950bca809fbaef8c4f6e53d23147ced649d2cb0b44448300b1123aaa80d70a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
