export const name="caret-circle-double-left-fill";
export const id="dl_48ea04303b354928a340";
export const url=new URL("../icons/caret-circle-double-left-fill.svg?v=39022cc93fa377e5e9c9c75beac563ac9bf7d6f6be93307b4da3c641db59492d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
