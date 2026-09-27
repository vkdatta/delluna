export const name="caret-circle-down-fill";
export const id="dl_446ae3ea25bc45c1b568";
export const url=new URL("../icons/caret-circle-down-fill.svg?v=4af7fce990c16183ebf6e361e17fb85fe9721b25add83e9894b10acdfdfd9c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
