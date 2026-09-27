export const name="lego-smiley-duotone";
export const id="dl_28fff51333c94a558228";
export const url=new URL("../icons/lego-smiley-duotone.svg?v=70836263b00834192244ea1b688fe4980d36b9b0adb9ae597fb0ea8288dee657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
