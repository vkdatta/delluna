export const name="hourglass_arrow_up";
export const id="dl_15389e041f519707a074";
export const url=new URL("../icons/hourglass_arrow_up.svg?v=d7481caccf3d3a7cadd7f25030b35229bf5a5c5e16844006570be210cdc42a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
