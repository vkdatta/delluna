export const name="arrow-bend-right-down-bold";
export const id="dl_557e625640db4233b1a6";
export const url=new URL("../icons/arrow-bend-right-down-bold.svg?v=3f571ee36fdd1e95dfa2e8515668374620a28d378f0ad8f9aacc25988fc66382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
