export const name="lucid_2-funnel-plus";
export const id="dl_ef98dc96940a4de68a09";
export const url=new URL("../icons/lucid_2-funnel-plus.svg?v=42dbe0e65ff11c4efa37b21724dd4808702b28b7ed26fe680013f9cf4faa61b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
