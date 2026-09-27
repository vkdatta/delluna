export const name="sticky_note_2";
export const id="dl_7df2a7186d4885477112";
export const url=new URL("../icons/sticky_note_2.svg?v=2fc181d4636f49ac4591da8794b30f215d8584a20463f201190a149fc03464fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
