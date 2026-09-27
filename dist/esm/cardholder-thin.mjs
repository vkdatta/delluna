export const name="cardholder-thin";
export const id="dl_9ae136b86ee54572aa6a";
export const url=new URL("../icons/cardholder-thin.svg?v=e150a7ceb3ede036695ab947320503cb7f0ec6337b2e9638857b38d3ff1c8d36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
