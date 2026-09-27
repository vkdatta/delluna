export const name="briefcase-metal-fill";
export const id="dl_8e9366e98a1a460a8aaa";
export const url=new URL("../icons/briefcase-metal-fill.svg?v=f5aa33bee935846a123ce8550a9dd6e4b98e3c826a9ab3e224dbe948aa31d5b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
