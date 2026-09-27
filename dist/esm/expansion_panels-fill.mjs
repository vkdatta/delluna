export const name="expansion_panels-fill";
export const id="dl_d730dd2eca3113d3cdbe";
export const url=new URL("../icons/expansion_panels-fill.svg?v=3da6fabd80df0c6d03b8269bc5364fd5e04f3228c0163a9df360477f3e8d3991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
