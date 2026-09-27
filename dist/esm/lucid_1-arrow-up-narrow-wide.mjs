export const name="lucid_1-arrow-up-narrow-wide";
export const id="dl_b6adf2fa1b2e480aa29b";
export const url=new URL("../icons/lucid_1-arrow-up-narrow-wide.svg?v=b606f021004c270a586aa779e5ee5b68b995b71345f4fc788c066242eea5c6a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
