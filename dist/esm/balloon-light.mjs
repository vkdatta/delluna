export const name="balloon-light";
export const id="dl_3ff46a9a470e4fb3b235";
export const url=new URL("../icons/balloon-light.svg?v=16bf9e57ceba9650920be9f696a883088934e367989a03928ac4526db71737e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
