export const name="rotate_right-fill";
export const id="dl_4e728b0dc2ae0da473d3";
export const url=new URL("../icons/rotate_right-fill.svg?v=91580fbcad21262c2a02fc50d6b12629bdf96cdd2eca5c3d70ddd206894297f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
