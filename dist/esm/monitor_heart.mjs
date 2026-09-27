export const name="monitor_heart";
export const id="dl_6b8d7a1dea3a7294563f";
export const url=new URL("../icons/monitor_heart.svg?v=5a87fbc9ac1878b786e04cb2ffa27eb8bbc1447f833ce9baafc4a6af12fb3f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
