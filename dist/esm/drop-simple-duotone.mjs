export const name="drop-simple-duotone";
export const id="dl_b5f5867d47d24be382c6";
export const url=new URL("../icons/drop-simple-duotone.svg?v=825fd05741045e909bc192d78f6c2c29a80f17c010aa38b48d216991f2e387f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
