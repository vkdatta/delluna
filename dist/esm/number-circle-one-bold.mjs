export const name="number-circle-one-bold";
export const id="dl_ac6f5cc601644354b1db";
export const url=new URL("../icons/number-circle-one-bold.svg?v=652aaafb2214f96ddc3fe3273aea9079cd9ad27d450b308e1b2e98b2968cd2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
