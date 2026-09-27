export const name="lasso_select-fill";
export const id="dl_28f63b2534c716f6db45";
export const url=new URL("../icons/lasso_select-fill.svg?v=410f48b7fe04261cccea26c3aa843a32ee373bfbdbcdcf7bb49dddc4ba549de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
