export const name="r_mobiledata-fill";
export const id="dl_f15fc0141122baddaefd";
export const url=new URL("../icons/r_mobiledata-fill.svg?v=ee825d6f3bc2aa32083f8370aaaa7cef8c83095bcdd6a4461930583385b67c10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
