export const name="cloud_lock";
export const id="dl_1ae18997e9136f6eb91a";
export const url=new URL("../icons/cloud_lock.svg?v=078c2e9522f6d589763b738ddaa08111782d00a8d5bb3bb24af5cfe67427ff55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
