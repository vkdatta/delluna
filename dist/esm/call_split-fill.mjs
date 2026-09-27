export const name="call_split-fill";
export const id="dl_d9fdd57a131bf36d9d3f";
export const url=new URL("../icons/call_split-fill.svg?v=ee6a7d01a04fcc53ef5df87f42ff5558f5164985580960df7140e81ed22b6205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
