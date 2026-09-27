export const name="skeleton-fill";
export const id="dl_113f93033b7cbeb42ee9";
export const url=new URL("../icons/skeleton-fill.svg?v=506683658ddb9005047a0810f82123a1e3b451a053eea5f2552823697fc960d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
