export const name="devices_fold_2";
export const id="dl_bd20dc60cc6d1e665c65";
export const url=new URL("../icons/devices_fold_2.svg?v=8ce9c28ffe80a0cffe31a1556f4a702b226bea98b556b337ee19a1eafbc8dc97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
