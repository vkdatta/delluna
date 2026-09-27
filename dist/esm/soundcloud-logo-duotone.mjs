export const name="soundcloud-logo-duotone";
export const id="dl_0a825b45a0f575662d43";
export const url=new URL("../icons/soundcloud-logo-duotone.svg?v=d2b79630a3d1745c323760f119114d4a1bac0d74d27b9aa75185363826a696e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
