export const name="support-fill";
export const id="dl_c7a54491cc1f37f87a62";
export const url=new URL("../icons/support-fill.svg?v=9924977a7dcd10aedc3c257901892b3f5dcf59665ae064d52d55e5a80432b133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
