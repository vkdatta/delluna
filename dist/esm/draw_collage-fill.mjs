export const name="draw_collage-fill";
export const id="dl_55459551fa3ced999a69";
export const url=new URL("../icons/draw_collage-fill.svg?v=6ce1d08ed8cd08b0964302b78309a5194a7769932c27ccf04814e6eb45e40d8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
