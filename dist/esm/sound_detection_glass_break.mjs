export const name="sound_detection_glass_break";
export const id="dl_a1ec3c702497d685be16";
export const url=new URL("../icons/sound_detection_glass_break.svg?v=78ed00e0c5ac6b474df6d26257378ef975159f29a9a343be7af54f0c54776555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
