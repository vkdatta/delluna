export const name="diversity_1";
export const id="dl_a46bd552e15944ad858c";
export const url=new URL("../icons/D/diversity_1.svg?v=97b3cf76d016995ec5d824594f761a048240875c381c24b8bcca2a541a93c28b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
