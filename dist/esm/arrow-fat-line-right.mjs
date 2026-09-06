export const name="arrow-fat-line-right";
export const id="dl_3fb804352b6a40d0aeed";
export const url=new URL("../icons/arrow-fat-line-right.svg?v=8b3834467aef315217e740facbb6dd9138d1a75d8957b57d220c79bec89acc87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
