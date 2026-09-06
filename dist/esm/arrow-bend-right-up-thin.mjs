export const name="arrow-bend-right-up-thin";
export const id="dl_4a7aa5b3707b4cf6b8ae";
export const url=new URL("../icons/arrow-bend-right-up-thin.svg?v=52327ba8add2286995a31e04d1d4bb2b254124cdfcb50cf310568381e92dab40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
