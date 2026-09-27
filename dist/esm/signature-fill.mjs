export const name="signature-fill";
export const id="dl_4809aff19e9e85a8634e";
export const url=new URL("../icons/signature-fill.svg?v=4c0ecfc208d9469496b03a4a9161710247d4bada5fe2bb1cf20c2d25e91d2a82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
