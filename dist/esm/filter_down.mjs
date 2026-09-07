export const name="filter_down";
export const id="dl_335014466c4e4e94ae1e";
export const url=new URL("../icons/all_60_named_svgs/filter_down.svg?v=e67b61a7237281ec2427cb256f650ad27e967365b9f3f78142d8dea33994e57e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
