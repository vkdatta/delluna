export const name="file_export";
export const id="dl_d5dc098a2c014590bdc0";
export const url=new URL("../icons/file_export.svg?v=87e7b88d550f0e7dc53df48475fd4adc8311c21c3e87e694489fea8c25453589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
