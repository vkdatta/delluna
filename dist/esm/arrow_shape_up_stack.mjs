export const name="arrow_shape_up_stack";
export const id="dl_6ca0d3691459dcda7b2a";
export const url=new URL("../icons/arrow_shape_up_stack.svg?v=85e73d2e1632c2caaed59016cf8bcb4f203294ad1f5e6ea6e2453f29109ccb4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
