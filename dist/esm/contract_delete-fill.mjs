export const name="contract_delete-fill";
export const id="dl_36f97b186833a4fed944";
export const url=new URL("../icons/contract_delete-fill.svg?v=7fcf8e236629b1b55f8eccb3f70d892682e95a9618e71d6db4008c68deeaa9c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
