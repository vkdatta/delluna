export const name="7k";
export const id="dl_606d0ac606044f487d2a";
export const url=new URL("../icons/7k.svg?v=33ad19b39e31910b56760e8525a6a85f79bc1d571cb54313df1581f0f67a799d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
