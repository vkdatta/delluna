export const name="truck-electric";
export const id="dl_384b85e546d4412699f8";
export const url=new URL("../icons/truck-electric.svg?v=320d88ee6924a6150af622e62fe96a897e34b9e14dcef6263b72dec9ba31172b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
