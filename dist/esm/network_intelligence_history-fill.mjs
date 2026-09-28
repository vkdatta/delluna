export const name="network_intelligence_history-fill";
export const id="dl_8ab19feb2c178ffc4101";
export const url=new URL("../icons/network_intelligence_history-fill.svg?v=91323b4e7dbfb0e07fbd426eeb8b1099c428635342eb65ac720c952cc310f499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
