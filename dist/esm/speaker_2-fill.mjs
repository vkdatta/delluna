export const name="speaker_2-fill";
export const id="dl_276167527b2047ba9e95";
export const url=new URL("../icons/S/speaker_2-fill.svg?v=f7f470cca85fd4eee7060ed0a06e66876ca727f84d6e6366018606a3114e6ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
