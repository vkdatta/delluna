export const name="format_image_front";
export const id="dl_c14ad988a665dc123172";
export const url=new URL("../icons/format_image_front.svg?v=9af1e57d8f01a377ee56c856e13712ff2c36468c055f5b38544aed5250835e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
