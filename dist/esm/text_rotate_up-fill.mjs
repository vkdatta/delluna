export const name="text_rotate_up-fill";
export const id="dl_0b7d66d85041962dfada";
export const url=new URL("../icons/text_rotate_up-fill.svg?v=7f223bd8ef5bec201fd0894558c324aca6b6499c3d1851e3c5846b9d80ea9308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
