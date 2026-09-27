export const name="sun-duotone";
export const id="dl_c2f8a5dd2e57717f8657";
export const url=new URL("../icons/sun-duotone.svg?v=1188bc0971283d431320327e15a9eec38137a06ae75d05523d85919aec6c9f8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
