export const name="single_arrow-fill";
export const id="dl_81d41b65c29a77b472e1";
export const url=new URL("../icons/single_arrow-fill.svg?v=6d8cf12559f7cd55d49875fd50ca95fb595373b48d5d121022d33dd72555500c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
