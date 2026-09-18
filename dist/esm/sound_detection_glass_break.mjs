export const name="sound_detection_glass_break";
export const id="dl_1d9ca7f569bc4fd5847b";
export const url=new URL("../icons/S/sound_detection_glass_break.svg?v=93beee41d431d190237bbbaf55bb76aab54410f4f3dd44fe1e4e4bd9c9a468c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
