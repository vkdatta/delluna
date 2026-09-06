export const name="lucid_1-circle-chevron-left";
export const id="dl_7b84c9ee66c342c5a257";
export const url=new URL("../icons/lucid_1-circle-chevron-left.svg?v=9383057a32ef8ac0025fd36070e52e32ec9d243729b81b251be37b6fd38a41a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
