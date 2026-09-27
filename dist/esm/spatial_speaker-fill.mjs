export const name="spatial_speaker-fill";
export const id="dl_7f4c9677f464eae708fb";
export const url=new URL("../icons/spatial_speaker-fill.svg?v=a747e8a52d2fd8d36dc21d2fb797a82763daa7bb8f00cbbdf43d2189a5a41b44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
