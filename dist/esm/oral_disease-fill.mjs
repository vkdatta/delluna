export const name="oral_disease-fill";
export const id="dl_462d6b688168de873aa3";
export const url=new URL("../icons/oral_disease-fill.svg?v=c5462a5ac925b099f11d05246c5a4ec2c47c2f181d88b58c114b4ba91cee83dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
