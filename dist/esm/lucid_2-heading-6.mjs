export const name="lucid_2-heading-6";
export const id="dl_1f9d79e21a2d440ba7be";
export const url=new URL("../icons/lucid_2-heading-6.svg?v=b2c13651d3de7c1f87d7ade1fd899eee53f78bb5d32ab1623634264f4b60fd39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
