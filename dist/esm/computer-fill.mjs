export const name="computer-fill";
export const id="dl_004ae962f587f1dd7dd7";
export const url=new URL("../icons/computer-fill.svg?v=af92149bbe2e059d585c4b721757712e95738468c1ec607b1516497f64562082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
