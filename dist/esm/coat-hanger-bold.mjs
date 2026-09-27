export const name="coat-hanger-bold";
export const id="dl_b2d8400307f74b9eab34";
export const url=new URL("../icons/coat-hanger-bold.svg?v=a772d9efda26d939a1228385d503a17ef0ef9856b8201144b0e34db708c28683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
