export const name="airplay-light";
export const id="dl_c4610438a8834fa4bbf1";
export const url=new URL("../icons/airplay-light.svg?v=06f52c0552d8caeaf40b28ce724f89e0335110c886baf39f69fbe42dc72b40c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
