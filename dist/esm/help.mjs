export const name="help";
export const id="dl_689c91b7d5b34d608511";
export const url=new URL("../icons/help.svg?v=137ce65996a4b95a40e50766759e4e41b3d6b1f4f79ca2147711de9467cb331c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
