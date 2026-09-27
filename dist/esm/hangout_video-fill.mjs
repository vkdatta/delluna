export const name="hangout_video-fill";
export const id="dl_b101b9d19099a1b97b5c";
export const url=new URL("../icons/hangout_video-fill.svg?v=76b6a4ca9c84790faad977f4954f6d3198c78c8133245ef6a1464dd89a1af8db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
