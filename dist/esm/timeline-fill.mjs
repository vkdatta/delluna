export const name="timeline-fill";
export const id="dl_981ed511999b44cc9c1f";
export const url=new URL("../icons/T/timeline-fill.svg?v=d84551f1126bfe766ccf2fce1b8ae6ca8d901ff47175327759145e8201aef865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
