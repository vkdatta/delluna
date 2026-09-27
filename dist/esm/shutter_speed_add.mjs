export const name="shutter_speed_add";
export const id="dl_ce433a7ad4c28291f12d";
export const url=new URL("../icons/shutter_speed_add.svg?v=f871e195c9fa7f58529dc448c43658de62860ca4c08c262a1ef676a8c13805c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
