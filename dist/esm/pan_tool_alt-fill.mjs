export const name="pan_tool_alt-fill";
export const id="dl_fc7c249af09b49119539";
export const url=new URL("../icons/pan_tool_alt-fill.svg?v=3ce0b314174f384b52193a5c9778016110f4822e4dc853ec3ad569bc9585034a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
