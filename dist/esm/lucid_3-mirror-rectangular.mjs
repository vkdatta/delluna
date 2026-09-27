export const name="lucid_3-mirror-rectangular";
export const id="dl_bd3f17c7e9de4df5a642";
export const url=new URL("../icons/lucid_3-mirror-rectangular.svg?v=47e990071e2b41ad36cbc5a60a9a68f3e6484ab05b8407f19690845d24df8848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
