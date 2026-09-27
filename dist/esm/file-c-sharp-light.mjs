export const name="file-c-sharp-light";
export const id="dl_4a0bcc2e6251456f94d8";
export const url=new URL("../icons/file-c-sharp-light.svg?v=1a711620d65691dc095eea6964f16cac9a651900c812058c0546148eca70aa21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
