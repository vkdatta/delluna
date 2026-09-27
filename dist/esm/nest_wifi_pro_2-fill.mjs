export const name="nest_wifi_pro_2-fill";
export const id="dl_965e4ebfed3711ea5a64";
export const url=new URL("../icons/nest_wifi_pro_2-fill.svg?v=a4286e1d8efad94508c8e89333e950b6fb1d83c0a1ceb528465fb4fcac799e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
