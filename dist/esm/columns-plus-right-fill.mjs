export const name="columns-plus-right-fill";
export const id="dl_ec659d6152d24c248aee";
export const url=new URL("../icons/columns-plus-right-fill.svg?v=175e5cf3e3a405e451bdf6fa2df6b3f9dc3a6a2ad221da1add77b82ca2ce6bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
