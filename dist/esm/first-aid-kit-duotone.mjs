export const name="first-aid-kit-duotone";
export const id="dl_b4bb01afadbd468f8995";
export const url=new URL("../icons/first-aid-kit-duotone.svg?v=e1e59d8a0650a2072a1714c951a79fe629b4c726f68945c785b2363858005038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
