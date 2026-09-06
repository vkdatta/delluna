export const name="truck-electric";
export const id="dl_384b85e546d4412699f8";
export const url=new URL("../icons/truck-electric.svg?v=f6a0b4eaf3f5b3babc15fcd8bac9ed52330daf43ff68a00e8d1db654ba915156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
