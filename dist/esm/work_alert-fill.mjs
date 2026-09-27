export const name="work_alert-fill";
export const id="dl_7f904cd7446eb586a931";
export const url=new URL("../icons/work_alert-fill.svg?v=c8e427edf560bd37913dff8775b3b26ed9ca9b58173b510de421cf6fcc078142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
