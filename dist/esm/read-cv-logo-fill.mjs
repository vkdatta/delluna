export const name="read-cv-logo-fill";
export const id="dl_51eeaaedb6314e6abdd9";
export const url=new URL("../icons/read-cv-logo-fill.svg?v=1ef5f809522f072a9b8b0f2ca77a2b9743bd4b9d33fd09ca0bd636e2a465b6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
