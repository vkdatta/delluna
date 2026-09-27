export const name="copy_all";
export const id="dl_41ecc6e99ae5b8628e41";
export const url=new URL("../icons/copy_all.svg?v=6c276089bbe38870d35aa16610eef7b7ec6ef0e05244e2a0886afb51b59746da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
