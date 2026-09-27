export const name="thermometer_add-fill";
export const id="dl_dda353a57efc2370e7b9";
export const url=new URL("../icons/thermometer_add-fill.svg?v=3aa63ccd5fdaf1d15f34057f5922cb3f81d7881173fb5fe5e5bb9d2089a715b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
