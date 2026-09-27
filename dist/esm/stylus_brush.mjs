export const name="stylus_brush";
export const id="dl_4dbe4cd24b4dabb2d143";
export const url=new URL("../icons/stylus_brush.svg?v=582423f7a0f9943773221cfa3223af7d474be389bc829f593394c3811e529fa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
