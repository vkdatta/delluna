export const name="heart-straight-break-fill";
export const id="dl_f7e4ec0bedde425387b2";
export const url=new URL("../icons/heart-straight-break-fill.svg?v=a67785efe091efb0b27dc54b56c884c4271dcc7a7ae8771d86fbaaa70983637f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
