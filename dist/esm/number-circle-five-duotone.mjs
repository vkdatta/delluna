export const name="number-circle-five-duotone";
export const id="dl_7e4b9055b0ca4e72b604";
export const url=new URL("../icons/number-circle-five-duotone.svg?v=fdbac1e0116246ad526b6d1f9b5d476fdb447a1c577ac15e3b212b165c07ead8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
