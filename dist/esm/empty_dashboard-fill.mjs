export const name="empty_dashboard-fill";
export const id="dl_7895fce52c10437b9558";
export const url=new URL("../icons/E/empty_dashboard-fill.svg?v=976593698ab4e5ff6a25d895de4571ca45fe48b37d77da839378882db0f0e772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
