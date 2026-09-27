export const name="lasso-duotone";
export const id="dl_f63930e9e4104825a741";
export const url=new URL("../icons/lasso-duotone.svg?v=c6bd1a22e9f43b24ddb7b2ba69d9ad858c868fb27993d620e57e5a5373a6520d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
