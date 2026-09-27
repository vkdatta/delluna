export const name="ear_sound-fill";
export const id="dl_5e93e7aee216ba02cca5";
export const url=new URL("../icons/ear_sound-fill.svg?v=88c21cc1a1dd3ec95876b0395649de17e6abfdd3884116dba551507794609c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
