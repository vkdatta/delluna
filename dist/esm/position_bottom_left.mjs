export const name="position_bottom_left";
export const id="dl_aea4241b4fb0776024a6";
export const url=new URL("../icons/position_bottom_left.svg?v=047057c3bc5988c7155b6525d33307c418e0c67887926fb774b2c51b81abe5be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
