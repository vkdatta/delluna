export const name="currency-gbp";
export const id="dl_7d59306d48a742ea97b6";
export const url=new URL("../icons/currency-gbp.svg?v=563023d86a8a6813520516a8f6b56fb109c2e27d600f8d82a9027887acc9edfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
