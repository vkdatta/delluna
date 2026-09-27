export const name="inpatient";
export const id="dl_80157700eec54099b200";
export const url=new URL("../icons/inpatient.svg?v=ec7262ac6157ef45732f8658b049b034dc4280a465636c6a5976acb45e5e1555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
