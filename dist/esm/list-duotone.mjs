export const name="list-duotone";
export const id="dl_a408ef28af164ec7bf5f";
export const url=new URL("../icons/list-duotone.svg?v=fc52d22a3e1d6cf041f5a83fd85b0dcaf2f2a369c7e711aad9ac73f3b3a2ae97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
