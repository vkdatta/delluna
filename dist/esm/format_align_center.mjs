export const name="format_align_center";
export const id="dl_e2977af388f4617660dd";
export const url=new URL("../icons/format_align_center.svg?v=9dee420eb142199634cc67845e7a02c6a2d5ea9e6c145c106a8b075cab0b80f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
