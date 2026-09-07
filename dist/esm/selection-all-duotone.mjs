export const name="selection-all-duotone";
export const id="dl_d6725d303a4247fc9fe5";
export const url=new URL("../icons/S/selection-all-duotone.svg?v=c4bdbe507c1ca4c2516430c449746364a669e59b953e9cf24b777215f9f352d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
