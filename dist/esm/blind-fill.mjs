export const name="blind-fill";
export const id="dl_964b339190ee32d84d7f";
export const url=new URL("../icons/blind-fill.svg?v=7126ba925db4eabe54a954fd966f9e4b254a8fa40d6e2cc7a0bf3aa39977bc78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
