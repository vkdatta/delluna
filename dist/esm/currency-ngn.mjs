export const name="currency-ngn";
export const id="dl_c5a6ef2b44734d75bd9c";
export const url=new URL("../icons/currency-ngn.svg?v=aa9f4f1ddea943ac8dc3b317d28459f0d73631f2f51e4b0e6fa44bfee7ac2ee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
