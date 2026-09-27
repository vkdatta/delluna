export const name="shipping-container-light";
export const id="dl_30312bad5ed2999d106e";
export const url=new URL("../icons/shipping-container-light.svg?v=cbef91ffc4c9d3545e8a9c8becf466ebce67ec5786ddcfcb82af3c385937bf25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
