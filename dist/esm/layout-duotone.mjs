export const name="layout-duotone";
export const id="dl_338697087ea8477cadcb";
export const url=new URL("../icons/layout-duotone.svg?v=f8d0876ac047847e913ad4de06f2c44a88bdc7b583538808757b47857f87af62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
