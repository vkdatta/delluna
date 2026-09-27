export const name="data_alert-fill";
export const id="dl_e217a1a2fbf98409e1e4";
export const url=new URL("../icons/data_alert-fill.svg?v=f3ed637551d4fa545697b4b08124058218c89a2641192c59099a861b48705425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
