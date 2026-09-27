export const name="speaker_3-fill";
export const id="dl_2259ce00d35e91bfd787";
export const url=new URL("../icons/speaker_3-fill.svg?v=83d0573f8347fa15484267eeb794fbfc727371a475886daa3e8f9c3ce262f71d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
