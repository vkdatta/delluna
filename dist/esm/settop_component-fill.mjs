export const name="settop_component-fill";
export const id="dl_24153cddb4b7d1ffa843";
export const url=new URL("../icons/settop_component-fill.svg?v=ce52d3b036f69428e338396d8a1faedbe1795d9bb2cafeb65b7badeff5d06e86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
