export const name="electric_moped";
export const id="dl_ee96d437f4d143d7a881";
export const url=new URL("../icons/electric_moped.svg?v=ed9d541b4efb41faa4c7dbc0ac115fa9ac47969745ec5e2ab07968112f8d9b8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
