export const name="first-aid-kit-duotone";
export const id="dl_b4bb01afadbd468f8995";
export const url=new URL("../icons/first-aid-kit-duotone.svg?v=33e68d7ef9ce83f8467a84ebb4d7e184b3f18646f4997db34c453f9638685b2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
