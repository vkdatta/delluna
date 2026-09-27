export const name="binary-bold";
export const id="dl_8d3c64d2893c49e9bd53";
export const url=new URL("../icons/binary-bold.svg?v=17aa6f331d575da435592253c40e754734f81f28703bec4ed397bd65a655e576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
