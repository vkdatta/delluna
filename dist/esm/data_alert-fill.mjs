export const name="data_alert-fill";
export const id="dl_ae2fad7c76834388bb00";
export const url=new URL("../icons/data_alert-fill.svg?v=add3c18976e14e76f2ee84dce31eecdcbde535648d2c37b48b1a97f75ec751a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
