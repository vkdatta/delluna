export const name="view_apps-fill";
export const id="dl_72481bbdb0e24cedae15";
export const url=new URL("../icons/V/view_apps-fill.svg?v=8852a07a940443775a703a0334c9c50538e3fbdc0f8ecb7dff68a2a01a5adba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
