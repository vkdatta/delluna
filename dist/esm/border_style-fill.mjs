export const name="border_style-fill";
export const id="dl_39c11c52512e38392fe8";
export const url=new URL("../icons/border_style-fill.svg?v=9eb7198699c0ad4433c52c240d42488bc2b83daba1b7d12c275dddb6517a7183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
