export const name="circle-dashed-light";
export const id="dl_f4ae541e0f394ec9b755";
export const url=new URL("../icons/circle-dashed-light.svg?v=f40c733ef46d97bc219414eea45b86fb5819c8c8c6add9006286065bee6bcfdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
