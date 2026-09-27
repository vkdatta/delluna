export const name="draw_collage-fill";
export const id="dl_5bb8c9308f5682f00720";
export const url=new URL("../icons/draw_collage-fill.svg?v=1c08f8f5c7ae17074259d8ace77ebbf4b76bef72784d9e0f0cb8179c5e3a982e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
