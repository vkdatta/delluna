export const name="show_chart-fill";
export const id="dl_f5cf9e7f256c4fe70850";
export const url=new URL("../icons/show_chart-fill.svg?v=496a94eb2a06bd303bd432a69d221208de55c97d40b571019e799ad74792bc37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
