export const name="inpatient";
export const id="dl_0b2236759cdb4269a01c";
export const url=new URL("../icons/I/inpatient.svg?v=3a61170f8c6a7c6515419ffd8118846567c094f49d2bb344fc3f77e25c231279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
