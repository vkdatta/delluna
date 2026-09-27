export const name="phone-disconnect-fill";
export const id="dl_cc29ecc23bde4c94a09d";
export const url=new URL("../icons/phone-disconnect-fill.svg?v=f9631c5679929f0ffad839377d2af8e839c2b3a91d76096c79678c9cef8c6882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
