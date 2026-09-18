export const name="bathroom-fill";
export const id="dl_b6d1e2f93a3342e59f13";
export const url=new URL("../icons/bathroom-fill.svg?v=08b9bdbd615ce1bcc7e8fe6a7a2206374b337117197211376bea8bfd4294b2d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
