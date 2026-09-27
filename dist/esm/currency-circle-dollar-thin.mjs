export const name="currency-circle-dollar-thin";
export const id="dl_7630be6ca39841cd9ee6";
export const url=new URL("../icons/currency-circle-dollar-thin.svg?v=255f1f896b1a6567626b1a6c09d8eb255e1a9bce1f471176a6dda2e2da0eeaee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
