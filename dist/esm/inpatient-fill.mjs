export const name="inpatient-fill";
export const id="dl_15f0a536b80242868641";
export const url=new URL("../icons/inpatient-fill.svg?v=f949f1c378bdefa9bc19ea7b9794d9c4e8b4d7e9683b34613ce232eb74bcc72e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
