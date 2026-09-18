export const name="screen_record-fill";
export const id="dl_ac3615092c114daaa64b";
export const url=new URL("../icons/S/screen_record-fill.svg?v=0daff563b327faf533c5ba442c369474c946dfe1eb4b6aaa275d3af4204dfdc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
