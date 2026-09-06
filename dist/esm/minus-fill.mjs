export const name="minus-fill";
export const id="dl_e31879da11d440889008";
export const url=new URL("../icons/minus-fill.svg?v=fc5b1fa0d71db88886b70da6a675f7de3e7d4007444e87ba68f174a9ecef037e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
