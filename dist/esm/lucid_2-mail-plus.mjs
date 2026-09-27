export const name="lucid_2-mail-plus";
export const id="dl_6b926f6822a04a1ca4d5";
export const url=new URL("../icons/lucid_2-mail-plus.svg?v=dbe3cd3d86f623cd9777ff46e1004f55d428be806d6686cccea04d71d4fa59cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
