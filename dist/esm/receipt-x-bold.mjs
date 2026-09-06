export const name="receipt-x-bold";
export const id="dl_2734544ba71e491b81ec";
export const url=new URL("../icons/receipt-x-bold.svg?v=7a0ce958e52cdf8f33d7c6789ef8c58da2a398d0f1435f35bb538f45915c4b58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
