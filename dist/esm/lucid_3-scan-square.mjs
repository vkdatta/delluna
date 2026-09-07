export const name="lucid_3-scan-square";
export const id="dl_b23fa8def5a744b092b6";
export const url=new URL("../icons/lucid_3-scan-square.svg?v=68a7dee47806c3512d83104b885edbbb3a2a72c9f11dc949be1d89076a74226d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
