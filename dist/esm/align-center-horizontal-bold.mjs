export const name="align-center-horizontal-bold";
export const id="dl_e8abe797c4ba433cb943";
export const url=new URL("../icons/align-center-horizontal-bold.svg?v=d52108ade6324dc522a09ab70ffce7b054450a6c594453d818f418ac3f30f26d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
