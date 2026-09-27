export const name="household_supplies";
export const id="dl_0a252704a01fc9843f22";
export const url=new URL("../icons/household_supplies.svg?v=fe9f5742caab908b4ac19c6985bb06c5123204c313acce62b1a7efed098c458f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
