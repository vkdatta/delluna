export const name="nest_eco_leaf";
export const id="dl_518bff650be4653cc694";
export const url=new URL("../icons/nest_eco_leaf.svg?v=55a067f9f5abdbedeac25def79b5da9b86ce2e238258fa2b386f17e6d189c0f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
