export const name="no_transfer";
export const id="dl_2138794ab7a0878e9644";
export const url=new URL("../icons/no_transfer.svg?v=10eeaa80f929d2bd532d8703166e492fbfd5084093073adc4860bcd749543c8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
