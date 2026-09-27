export const name="filter_none";
export const id="dl_8e511cab5a2e96a7e4ba";
export const url=new URL("../icons/filter_none.svg?v=e34193330f1748a2ead2421685617671632f5575705579f0f869c7db39779d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
