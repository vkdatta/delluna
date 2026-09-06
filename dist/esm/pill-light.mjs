export const name="pill-light";
export const id="dl_f0933ad011044e89ad0e";
export const url=new URL("../icons/pill-light.svg?v=e77796a67f3e2c546a741841125bdc84f7ced60af549db2c74d38772f33c2495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
