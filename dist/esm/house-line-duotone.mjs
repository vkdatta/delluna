export const name="house-line-duotone";
export const id="dl_b54d4ae6f7bb4cfba143";
export const url=new URL("../icons/house-line-duotone.svg?v=c4a8e60acc0a98d65c01c210d9e6ac1cbc302d9e3df9ceffbbf9d9ff06f8dba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
