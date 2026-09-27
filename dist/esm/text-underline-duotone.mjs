export const name="text-underline-duotone";
export const id="dl_23751cf10afe9d49a9be";
export const url=new URL("../icons/text-underline-duotone.svg?v=abf7618d23ff143769fcbd1d85d07c49b68c89d5b75dbb0f1234bfbf4416c1c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
