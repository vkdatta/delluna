export const name="bath_private";
export const id="dl_5370ef4fa80a488e81bf";
export const url=new URL("../icons/bath_private.svg?v=6dcaa204722af9154ad8ea154931a97ac3810f4e2d3623a0cf870278093c6d79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
