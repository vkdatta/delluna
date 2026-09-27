export const name="person-simple-bike-duotone";
export const id="dl_021456c2f5134545beb1";
export const url=new URL("../icons/person-simple-bike-duotone.svg?v=b7605a87ee22b8d08e93452bf52dd1ca6048c56dc7b12a7e558c9fe0941844ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
