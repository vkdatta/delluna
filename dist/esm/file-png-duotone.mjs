export const name="file-png-duotone";
export const id="dl_c31311e3082c4a87853b";
export const url=new URL("../icons/file-png-duotone.svg?v=f62c3bf93403214270a23290a4bc4eff51f3bb7065b2e12142900c49d2dcff8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
