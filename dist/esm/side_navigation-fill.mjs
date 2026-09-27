export const name="side_navigation-fill";
export const id="dl_b15ea8be790f7bdf72f9";
export const url=new URL("../icons/side_navigation-fill.svg?v=c26b1bda07dd40852c046f51e9dccf2633c3b40e74824d2ef54bd9aab6712d5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
