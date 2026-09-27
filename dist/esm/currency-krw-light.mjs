export const name="currency-krw-light";
export const id="dl_72d415b8bfc847b595ed";
export const url=new URL("../icons/currency-krw-light.svg?v=30a05b808021e1d678e2bd67a894490aab2a2854b146be31cd7eccc563714954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
