export const name="flow-arrow";
export const id="dl_a9eadf45b2b44b5fb33f";
export const url=new URL("../icons/flow-arrow.svg?v=01f508a2d2795cec33319fed16e8e18798fcfd55a9fb45f928a1e1c563e835a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
