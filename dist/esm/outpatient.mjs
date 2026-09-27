export const name="outpatient";
export const id="dl_ac94223c580829dda0e9";
export const url=new URL("../icons/outpatient.svg?v=8e0b273eaa8c5f68a88144c7f5a916a61f2a771a4386a8582cfd2db54454dbc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
