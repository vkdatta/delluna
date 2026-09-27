export const name="borg-fill";
export const id="dl_5e78f7a85620010e6a58";
export const url=new URL("../icons/borg-fill.svg?v=e3d3fa9e352e059a8d56250b3c61485054d32697b35a4c062bbbf87055832c4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
