export const name="identification-card-fill";
export const id="dl_f21de01f3c054f8ca425";
export const url=new URL("../icons/identification-card-fill.svg?v=1ab3b4b94b739bdfb871cdae5455be56e0ad59639d3f3b23f908858a5e0c7b69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
