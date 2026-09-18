export const name="detector_smoke-fill";
export const id="dl_eab83c285670421cb08f";
export const url=new URL("../icons/detector_smoke-fill.svg?v=9982b4f974ccadfcd2eeef032d400535059cbefbd7e9adc429f89cd41a611974",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
