export const name="letter-circle-p-bold";
export const id="dl_7eb530c6d15045139f9c";
export const url=new URL("../icons/letter-circle-p-bold.svg?v=27ec283cdc94e188d954018457630b88b9f0681ae46acc35ef94293cf6d46140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
