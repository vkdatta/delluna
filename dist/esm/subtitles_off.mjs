export const name="subtitles_off";
export const id="dl_a00501fb6c8a6f3d29bd";
export const url=new URL("../icons/subtitles_off.svg?v=c0ab646ca7f8a610316a35710bc22292a394a454954f3a3d6820219e0157600b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
