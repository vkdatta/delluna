export const name="cloud-moon-duotone";
export const id="dl_692df18434fa4a829710";
export const url=new URL("../icons/cloud-moon-duotone.svg?v=3a97f14485b13f1f61156a0723b89d73aa878f33459116d7fa7d2bbf40e9a153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
