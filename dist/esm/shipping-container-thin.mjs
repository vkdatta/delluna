export const name="shipping-container-thin";
export const id="dl_aa6e1a5f87e08b1e4a45";
export const url=new URL("../icons/shipping-container-thin.svg?v=70314c25220f33ed191140b820a4385eeb0217a83617f56a79b089f83a0b05c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
