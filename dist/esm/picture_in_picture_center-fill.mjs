export const name="picture_in_picture_center-fill";
export const id="dl_57dd64583ed835977731";
export const url=new URL("../icons/picture_in_picture_center-fill.svg?v=1c8ee676573cdb4cee24410bca3bfe82d9a64b5be25a27c2e69acfecbaf471bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
