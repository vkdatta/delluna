export const name="school";
export const id="dl_3ca6cd8196f5e0d285be";
export const url=new URL("../icons/school.svg?v=f16a94ad49257f94f3760e84cb6c12504012db00e75faa85311c15ebbad4c823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
