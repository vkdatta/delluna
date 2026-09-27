export const name="medical_information-fill";
export const id="dl_fd29f2509c40b26ce72e";
export const url=new URL("../icons/medical_information-fill.svg?v=351460c3623879cbe989f779d71032228217791096788bb44105f681a3eb21e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
