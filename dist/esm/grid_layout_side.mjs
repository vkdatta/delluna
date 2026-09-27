export const name="grid_layout_side";
export const id="dl_a3b2b3dd63237c2835e4";
export const url=new URL("../icons/grid_layout_side.svg?v=2caff58ada14e4a672d8d23d58fee5d03841ac3666ea52088d37272e611ed9b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
