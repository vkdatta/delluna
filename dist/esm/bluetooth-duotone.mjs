export const name="bluetooth-duotone";
export const id="dl_c69d296737be40ef8d05";
export const url=new URL("../icons/bluetooth-duotone.svg?v=0c814547536bbd32b108acd8392d80a07f7f0546a41b18aba5c11ac9a3045441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
