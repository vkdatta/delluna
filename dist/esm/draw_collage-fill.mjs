export const name="draw_collage-fill";
export const id="dl_22c8590023c24a87b9d4";
export const url=new URL("../icons/draw_collage-fill.svg?v=93ba2a0e6e06ab67dc62357eef360d1dbd0746add75e13c4cf1558e81a9c5565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
