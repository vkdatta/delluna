export const name="group_remove";
export const id="dl_1c1a20d2a3862bc2149e";
export const url=new URL("../icons/group_remove.svg?v=77a7e517190ddbc1d86ebfc43968a9e2137ae1380313ef2119f150f713dae28d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
