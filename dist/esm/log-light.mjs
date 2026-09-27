export const name="log-light";
export const id="dl_92c4d40372544b43a9f3";
export const url=new URL("../icons/log-light.svg?v=f3e44d9a2cf62b35f5fd00e94c6e1a2440060f32431ace136f97f15fd7e3cc59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
