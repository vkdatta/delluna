export const name="photo_camera-fill";
export const id="dl_0b868b57112850854c32";
export const url=new URL("../icons/photo_camera-fill.svg?v=888e9e6e7f23e66d8aa98c6a5e63329b565a471aeca7ba22bf141e9fdc8dd2a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
