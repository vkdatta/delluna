export const name="encrypted_minus_circle";
export const id="dl_5a166f6d6ff557d56ebc";
export const url=new URL("../icons/encrypted_minus_circle.svg?v=eb28ab46b9d91db217dccfce3379d65607a63daf2e60ef7d2e4fe776a104c9fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
