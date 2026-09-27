export const name="caret-circle-double-left-fill";
export const id="dl_48ea04303b354928a340";
export const url=new URL("../icons/caret-circle-double-left-fill.svg?v=b3fef381048532cb588cc795da4400acc9006362f09beacdfbf58b330ce8fa82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
