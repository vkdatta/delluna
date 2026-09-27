export const name="picture_in_picture_mobile-fill";
export const id="dl_75be862dcaa8bc996517";
export const url=new URL("../icons/picture_in_picture_mobile-fill.svg?v=d6df56ef1c2969e1c11509e326aab30b02b7d432ca3d3e392309cbdd483dff73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
