export const name="fingerprint_off-fill";
export const id="dl_ecc35752d79262c11227";
export const url=new URL("../icons/fingerprint_off-fill.svg?v=6f288ff03b162628768f9775e58b9e8b43fb1de55566e44e5c5dddb9a42b549d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
