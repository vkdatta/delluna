export const name="number-circle-seven";
export const id="dl_a2866c65028047c69d3e";
export const url=new URL("../icons/number-circle-seven.svg?v=0fd396a09c93680d9dd22a3511376583b2d809a768953f51a51861f9a2e6e0f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
