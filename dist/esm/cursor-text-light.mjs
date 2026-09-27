export const name="cursor-text-light";
export const id="dl_e203cd8e21014ddfa242";
export const url=new URL("../icons/cursor-text-light.svg?v=4174a142491ebb0624d2a13c13e45a04bd94465c2ab59ac84f5fe145b3b48534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
