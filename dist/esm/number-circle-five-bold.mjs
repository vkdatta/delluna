export const name="number-circle-five-bold";
export const id="dl_1fbfdd1922ed434986d0";
export const url=new URL("../icons/number-circle-five-bold.svg?v=b67be4c0d333f4492bbbee524dddbae83aee8c12be970cb0b50471a4abb2a7fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
