export const name="pan_tool_alt-fill";
export const id="dl_721dba22c280fbb6c815";
export const url=new URL("../icons/pan_tool_alt-fill.svg?v=4a7dbf64be48e44b1f5eaab6ce1cc7e7ab795b222c8df468b5a1f4ce163b7790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
