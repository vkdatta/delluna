export const name="escalator-up-duotone";
export const id="dl_ad272eb6e9fa475ba1c3";
export const url=new URL("../icons/escalator-up-duotone.svg?v=35e0b8dd1e18258172eaecf39d3cf54884d9489c1f43b1371609672836ede0de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
