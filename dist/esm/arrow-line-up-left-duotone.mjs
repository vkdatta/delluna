export const name="arrow-line-up-left-duotone";
export const id="dl_f0e1c351becc461dafcf";
export const url=new URL("../icons/arrow-line-up-left-duotone.svg?v=76dee203577bba1de0f802dc3b3a0d2bc5e142cc96483231c13acfb32d91de43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
