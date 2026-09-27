export const name="credit-card-duotone";
export const id="dl_5b2292f0bde0403590ef";
export const url=new URL("../icons/credit-card-duotone.svg?v=1d5f7a97b53b3daa854d95794141027e1c49c5aba264060112ee61765a267c56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
