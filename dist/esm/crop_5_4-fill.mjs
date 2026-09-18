export const name="crop_5_4-fill";
export const id="dl_7a5fad51c4144f278af1";
export const url=new URL("../icons/crop_5_4-fill.svg?v=b7f7b6bf6923f19622b1dc8143ac1281f2f7fb0829f5ebadf595d43f059d3137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
