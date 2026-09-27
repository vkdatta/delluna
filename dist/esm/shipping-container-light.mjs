export const name="shipping-container-light";
export const id="dl_21c4a54bf85e32c3e2f6";
export const url=new URL("../icons/shipping-container-light.svg?v=5762782c6a3b03c4a1e6ba29341a31a0a2e67a226a641cdb066ba3d8f4307652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
