export const name="view_list";
export const id="dl_ab4d3e3cfa1043389f5d";
export const url=new URL("../icons/view_list.svg?v=16626206161bf2be7b3f1ae0a0ceea9aebfc2c1ef896486bdeb9425b0531c756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
