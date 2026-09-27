export const name="letter_switch-fill";
export const id="dl_e42a99bb782dd6348baa";
export const url=new URL("../icons/letter_switch-fill.svg?v=16a730e36721d2dbec82d3f34840f8160df439b746442f33711de4ab6da722ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
