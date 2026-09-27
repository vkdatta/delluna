export const name="package-duotone";
export const id="dl_963eb808a6f744c795f1";
export const url=new URL("../icons/package-duotone.svg?v=10ce2f639d459ec0296db7e70106e5503244cc307bbe0c36141cb8c81d8c99e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
