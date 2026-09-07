export const name="lucid_2-credit-card";
export const id="dl_7ac68abdf83f4762862e";
export const url=new URL("../icons/lucid_2-credit-card.svg?v=88a28be3abe75b43a47e18134a96f6dbf450e0d659d3e868dacb351ffb9cc1cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
