export const name="humerus_alt-fill";
export const id="dl_998da31df8e63a099712";
export const url=new URL("../icons/humerus_alt-fill.svg?v=8e48f78d8a465a11c5a8e710d6f0b8ebe35f01427d05ea9a512b7b5e48ff07e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
