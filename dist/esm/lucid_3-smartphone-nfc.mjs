export const name="lucid_3-smartphone-nfc";
export const id="dl_f5e5509a285148d18ad4";
export const url=new URL("../icons/lucid_3-smartphone-nfc.svg?v=5eea33036d17ea9701065fcff6472c7459a11a07bcce0baea84bb405d63c1a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
