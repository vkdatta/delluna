export const name="pan_tool_alt-fill";
export const id="dl_cc589c67714d474962ac";
export const url=new URL("../icons/pan_tool_alt-fill.svg?v=3f880026c3aae6e46da051857349f494306a679477c400b1d8a7bba14defd94a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
