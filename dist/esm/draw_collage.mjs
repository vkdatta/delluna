export const name="draw_collage";
export const id="dl_0c1b2bc8004b4f978712";
export const url=new URL("../icons/D/draw_collage.svg?v=dba6afe72c2c2ec818119329cfa880b8c3efa268a14ea8917b089646ac810180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
