export const name="medical_mask";
export const id="dl_37212f015180b7deb1d6";
export const url=new URL("../icons/medical_mask.svg?v=752b684850fc5dff81b07ffaf24ac1c1863f6db28d7ce814a26d6911af2bca75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
