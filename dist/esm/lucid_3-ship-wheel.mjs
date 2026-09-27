export const name="lucid_3-ship-wheel";
export const id="dl_9a2529100091499493f5";
export const url=new URL("../icons/lucid_3-ship-wheel.svg?v=b7fa003a7a802adfeda9c5ba90f1cb7daae1fa8cdd2cf5f95fe1f39b89271d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
