export const name="contact_phone-fill";
export const id="dl_a00800b823a2c5bbc6f8";
export const url=new URL("../icons/contact_phone-fill.svg?v=44456c7cded8a01ff684fcde39afcb90d81161450e31a4415d812393b2cbeea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
