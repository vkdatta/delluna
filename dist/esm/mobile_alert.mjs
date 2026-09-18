export const name="mobile_alert";
export const id="dl_18dae1257dfc4e5c80d3";
export const url=new URL("../icons/M/mobile_alert.svg?v=908f8ef4e7ace99eed295fd29c4ec0fbd43ea2d185033f7d677eaf0ca2247ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
