export const name="content_copy-fill";
export const id="dl_0939fc0ab13cadd96f6d";
export const url=new URL("../icons/content_copy-fill.svg?v=ba23677a2affe85a1588f208ee7db0aacb4b44edd39b770c3aa20e22967e19bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
