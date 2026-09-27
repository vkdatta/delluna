export const name="medal-military-fill";
export const id="dl_e6c2fb5018cd4ed9bf7f";
export const url=new URL("../icons/medal-military-fill.svg?v=78e6ca51da7441ef0ba7e45ee0bc1c53991578c83e6f5e796b4bf3d7f94d4c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
