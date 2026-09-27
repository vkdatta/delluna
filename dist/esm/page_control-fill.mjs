export const name="page_control-fill";
export const id="dl_da50ea95cd11b33c2e8a";
export const url=new URL("../icons/page_control-fill.svg?v=a36af0801725e88984504b92b3108d28ff6763b5161d6722edf418e99b975fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
