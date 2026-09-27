export const name="crop_21_9-fill";
export const id="dl_5b1a7c5997adb88f0ce1";
export const url=new URL("../icons/crop_21_9-fill.svg?v=17a97d30336e1ef43e1e06e1e11ef7dc8a4247348c65aecf8672006b2045da55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
