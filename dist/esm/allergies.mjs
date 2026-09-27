export const name="allergies";
export const id="dl_44272a6959f3560a4345";
export const url=new URL("../icons/allergies.svg?v=b15aae5c5453ba67abe96794e080d964cadbf10a9fbbab3b47067ee0a24b850f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
