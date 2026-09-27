export const name="format_image_left-fill";
export const id="dl_543a50e70c41e47a245a";
export const url=new URL("../icons/format_image_left-fill.svg?v=d92554b8b1d8b2d7c102e33c25a4da4709dea84687ca328069cb3e8f5ea2c9cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
