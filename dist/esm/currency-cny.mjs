export const name="currency-cny";
export const id="dl_8f1795f5217542daa38b";
export const url=new URL("../icons/currency-cny.svg?v=91ae443122851959c63c55f43582903da6e532dd6f4fb12957e68286c349aea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
