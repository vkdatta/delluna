export const name="hourglass_check-fill";
export const id="dl_0dff625508484d527d2c";
export const url=new URL("../icons/hourglass_check-fill.svg?v=fa0d02de9ba28f5aa3789d533c9c3232e6c698395a57b9c309370c48e95c8081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
