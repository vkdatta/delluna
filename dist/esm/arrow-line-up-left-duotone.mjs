export const name="arrow-line-up-left-duotone";
export const id="dl_f0e1c351becc461dafcf";
export const url=new URL("../icons/arrow-line-up-left-duotone.svg?v=af7e78f6abd221b2fe7a61dc584f0d95a7b4e9d1486000974d89f057dd7f1906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
