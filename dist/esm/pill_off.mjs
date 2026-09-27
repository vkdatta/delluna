export const name="pill_off";
export const id="dl_255a5f169bab78e00f2c";
export const url=new URL("../icons/pill_off.svg?v=e1640cc002613a85498bc728321c3c8a706b606f085d1f2d3b27ed3cc6073cc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
