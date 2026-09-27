export const name="h_plus_mobiledata_badge-fill";
export const id="dl_abe84dc7ee8e918e1608";
export const url=new URL("../icons/h_plus_mobiledata_badge-fill.svg?v=d4f44c3ec784ca7e1ca0ded14701ba4422fc26bd8c9e0da83174a8e3c5577324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
