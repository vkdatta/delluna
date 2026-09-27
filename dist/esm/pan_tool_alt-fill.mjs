export const name="pan_tool_alt-fill";
export const id="dl_dae7472ba609506d6793";
export const url=new URL("../icons/pan_tool_alt-fill.svg?v=373433bbc24b299b8a724ad22225dd116a2855756a7ff7610facc7d7772c541d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
