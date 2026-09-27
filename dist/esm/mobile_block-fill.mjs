export const name="mobile_block-fill";
export const id="dl_d43e882b31692f1f07f5";
export const url=new URL("../icons/mobile_block-fill.svg?v=1b4f992daa9dcd6dba2bcc21469f1bddd774c94ad9fbe9d99e048fe9f8800980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
