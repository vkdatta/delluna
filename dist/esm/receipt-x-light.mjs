export const name="receipt-x-light";
export const id="dl_6f2b1d87c42f44518fb7";
export const url=new URL("../icons/receipt-x-light.svg?v=0a4b7aebdba53eae6ca99a6201418846047badeda6561ed98601258ebc971bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
