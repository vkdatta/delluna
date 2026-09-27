export const name="format_image_break_right";
export const id="dl_46fce1bec3d1a395d312";
export const url=new URL("../icons/format_image_break_right.svg?v=4b0c7693bda0c8a26f3434e4b9f07356b4de6d2eaf3c353342ffa5b168163ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
