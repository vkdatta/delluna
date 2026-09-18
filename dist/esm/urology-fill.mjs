export const name="urology-fill";
export const id="dl_e329fd7c94b34af99f4a";
export const url=new URL("../icons/urology-fill.svg?v=a77bfbc281137ff01681498a2925c51427074066e4be74d121c5aa36ada5e1d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
