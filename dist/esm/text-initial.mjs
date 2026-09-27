export const name="text-initial";
export const id="dl_a22c50ad5704498da77a";
export const url=new URL("../icons/text-initial.svg?v=339464ac201c620782cedad14824398372f00d21577a6d068e152e343a7bd52c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
