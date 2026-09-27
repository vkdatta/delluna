export const name="wifi-medium-bold";
export const id="dl_3373a80799a4b59b4f7b";
export const url=new URL("../icons/wifi-medium-bold.svg?v=578a4e325384ebf2cce611598dac064bfd37db7a9e0ada7e236878286680ede0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
