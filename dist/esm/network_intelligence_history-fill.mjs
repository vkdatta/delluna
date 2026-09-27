export const name="network_intelligence_history-fill";
export const id="dl_afeb1a11ccaba75d839b";
export const url=new URL("../icons/network_intelligence_history-fill.svg?v=007a33f0ed7423c0b70166f2b50c207744a92a3cdd06ca1cfc118ffe78b62c41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
