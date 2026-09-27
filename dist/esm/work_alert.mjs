export const name="work_alert";
export const id="dl_6daff3a30db4d5458909";
export const url=new URL("../icons/work_alert.svg?v=2c24e4ff94399314fbe0cd9bb0712df17ce912608e2a7088731678ae3252a405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
