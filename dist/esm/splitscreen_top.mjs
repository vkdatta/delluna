export const name="splitscreen_top";
export const id="dl_d3352e8302607930e683";
export const url=new URL("../icons/splitscreen_top.svg?v=021299fa9caed443833d42c8e8d1e51dfe8fa578283ab97b0046cc9de090f11a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
