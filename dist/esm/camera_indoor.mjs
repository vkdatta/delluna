export const name="camera_indoor";
export const id="dl_ce2c0387cf8ec584d9b9";
export const url=new URL("../icons/camera_indoor.svg?v=bcfba69df8c9dea4ac4014537c91dd735c1bc788340b06dbdded7877e09d3662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
