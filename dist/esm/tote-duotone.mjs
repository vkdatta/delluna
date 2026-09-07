export const name="tote-duotone";
export const id="dl_25c3c2589b07441f9a49";
export const url=new URL("../icons/T/tote-duotone.svg?v=4cd3f427bc2e4ccd29515a01cb7173f1aeb3efab44c49d12deabaac4f254e646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
