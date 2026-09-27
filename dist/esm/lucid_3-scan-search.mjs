export const name="lucid_3-scan-search";
export const id="dl_6509383768dc40a088ff";
export const url=new URL("../icons/lucid_3-scan-search.svg?v=a922d7a4c95282ee597369d2be4bdac04c96f2a988eb3bc76216003673fdcc10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
