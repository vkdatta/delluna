export const name="webhooks-logo-duotone";
export const id="dl_477b8b126396bc8871a3";
export const url=new URL("../icons/webhooks-logo-duotone.svg?v=520b14324ac3a63aa930873d7e5b696c9321abfb1802d56389685243476e6333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
