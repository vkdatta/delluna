export const name="t-shirt-thin";
export const id="dl_6cb5c627405445128dd3";
export const url=new URL("../icons/T/t-shirt-thin.svg?v=e68720e953f684b767fb1eb666ad3813348e231bcbb89cc40f95f8c30bbd1b02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
