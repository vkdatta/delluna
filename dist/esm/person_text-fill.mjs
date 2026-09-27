export const name="person_text-fill";
export const id="dl_81d604b3319cadaf8367";
export const url=new URL("../icons/person_text-fill.svg?v=4a1c922e4f6e993107f34535b184893899116b0be0b1f6eedc8cf995141987ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
