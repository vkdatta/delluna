export const name="overview";
export const id="dl_88feb9ce14f197c8229e";
export const url=new URL("../icons/overview.svg?v=a78d24e4f2b241f8a5e832b95cdab12c833f556327eec442a8ee756598963a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
