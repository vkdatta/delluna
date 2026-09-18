export const name="sticky_note_2";
export const id="dl_4274a72fa3064f92b0dc";
export const url=new URL("../icons/S/sticky_note_2.svg?v=2fc181d4636f49ac4591da8794b30f215d8584a20463f201190a149fc03464fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
