export const name="lucid_3-rocking-chair";
export const id="dl_64cc2fa125d24f6783ee";
export const url=new URL("../icons/lucid_3-rocking-chair.svg?v=189ba456fcbc913f46e69c0421cfc064a5982516c7c7340fbb3691bfd2dc8184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
