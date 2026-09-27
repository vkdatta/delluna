export const name="data_alert-fill";
export const id="dl_f54035850e35d5a8b55f";
export const url=new URL("../icons/data_alert-fill.svg?v=55d728d14b9519ff1236377e3c3fbb81136517b2ef717edb6ff40c955e292afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
