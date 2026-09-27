export const name="payments-fill";
export const id="dl_6ff6e3334099086895ab";
export const url=new URL("../icons/payments-fill.svg?v=d7a5c48e5bcb837ca4e0f2d49a5dc81cbd071948a2485d4369ffb4e54d4b7394",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
