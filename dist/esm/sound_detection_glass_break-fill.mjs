export const name="sound_detection_glass_break-fill";
export const id="dl_270869e6ae51862278d7";
export const url=new URL("../icons/sound_detection_glass_break-fill.svg?v=1dabff2c796a87f4bcb274c801dc28c52d520cae4fd86a61ddaaabf7b309ad6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
