export const name="assured_workload-fill";
export const id="dl_005d684c3214d43ec4d7";
export const url=new URL("../icons/assured_workload-fill.svg?v=a909d99cbd6e3a363512643b543d5ddab2fe15b28bbe70bc3bf49d9a4c88ae95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
