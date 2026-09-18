export const name="vertical_align_center-fill";
export const id="dl_2caca25b33bf4fcaa443";
export const url=new URL("../icons/vertical_align_center-fill.svg?v=577f80e8265c23290821e75915fb3a47f706d2d46d6fc7717d4ffa61ebbfa7b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
