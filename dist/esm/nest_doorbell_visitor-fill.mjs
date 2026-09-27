export const name="nest_doorbell_visitor-fill";
export const id="dl_136d8362561db9632121";
export const url=new URL("../icons/nest_doorbell_visitor-fill.svg?v=f8596a2893f6462ff03793923962892c1fe45b5f04efa972a038a784a66138d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
