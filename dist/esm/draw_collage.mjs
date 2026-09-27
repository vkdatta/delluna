export const name="draw_collage";
export const id="dl_2b0923c31117809ef8e5";
export const url=new URL("../icons/draw_collage.svg?v=015044fa1e15bd4456a612d4c08f0acc8b2d1ecd4fa57542972332fec2a87da0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
