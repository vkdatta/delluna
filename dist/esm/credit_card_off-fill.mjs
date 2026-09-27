export const name="credit_card_off-fill";
export const id="dl_e298ecd5267c1e9e18d2";
export const url=new URL("../icons/credit_card_off-fill.svg?v=5a8628445524c094f833b47a01045a8f91fd4cbe1fa5ea19165f3a9d46a17c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
