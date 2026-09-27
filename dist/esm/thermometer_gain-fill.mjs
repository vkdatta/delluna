export const name="thermometer_gain-fill";
export const id="dl_2379ac8ad3e161359680";
export const url=new URL("../icons/thermometer_gain-fill.svg?v=df042fa0a2cd8fdf272900ee3208c9e6c76cca92c4f8339a8f831550c11f9c5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
