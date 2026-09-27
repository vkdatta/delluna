export const name="lift_to_talk-fill";
export const id="dl_6c6c25f9756be984c4d5";
export const url=new URL("../icons/lift_to_talk-fill.svg?v=6a0a8ae24f5ec004f4178c0ccb50c0fbb09f2ce6f9d5ab9817941f451724553b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
