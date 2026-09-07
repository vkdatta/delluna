export const name="currency-dollar-duotone";
export const id="dl_cbd8eaff1fbb4287bc3b";
export const url=new URL("../icons/currency-dollar-duotone.svg?v=06f3a9232c51d620570eb094bd571fc8e92dab4e17f290eb1a9dca64f6bff69f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
