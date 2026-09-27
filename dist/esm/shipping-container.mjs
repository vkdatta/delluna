export const name="shipping-container";
export const id="dl_728747aa32ce36e279f3";
export const url=new URL("../icons/shipping-container.svg?v=038fc6f86431c1b7a85560faa60daa3e07984b12933e2c897d0d54e62f1c9fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
