export const name="sell-fill";
export const id="dl_49844a4dd70ed7af2c37";
export const url=new URL("../icons/sell-fill.svg?v=47438caadde289ab698ad4e074eb87cdd19f1fb7e28469cdf7999ca4175993cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
