export const name="assured_workload";
export const id="dl_d6cc289d736c3c3923f2";
export const url=new URL("../icons/assured_workload.svg?v=881653838286cd743661fda5cb8409b5b26f508d09b438f00973016703ee6ed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
