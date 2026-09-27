export const name="lucid_2-ev-charger";
export const id="dl_a6981637765142d59d12";
export const url=new URL("../icons/lucid_2-ev-charger.svg?v=947c658d8f7de6839afd30ee05172c4c1b409411d18de9eb9a1c317ed98cb08f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
