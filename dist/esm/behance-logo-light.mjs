export const name="behance-logo-light";
export const id="dl_6d3632e8a8924f1dbb30";
export const url=new URL("../icons/behance-logo-light.svg?v=8237e2fad985a8e60dc2be3313c88227fb5f65717ff07ccf562ec0dfbcf9440a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
