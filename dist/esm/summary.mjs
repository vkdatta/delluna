export const name="summary";
export const id="dl_13b9aa389eff4e558600";
export const url=new URL("../icons/summary.svg?v=84bc6788862c5bd9fc635448022233219fb1b35d3ebc105b54c0a8c4938cead4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
