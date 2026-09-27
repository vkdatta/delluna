export const name="pan_tool_alt";
export const id="dl_987d52f87d2a384a8774";
export const url=new URL("../icons/pan_tool_alt.svg?v=9bbb2975f622e56d2f842bbdd5a38456f397d033bcd2ac7010a4b19aa4ba6106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
