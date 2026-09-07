export const name="coins-duotone";
export const id="dl_dd19280a5ced46c4913e";
export const url=new URL("../icons/coins-duotone.svg?v=23551f8da502c3290481cd0ae01c518628f2ca851689effacfa901e7c54aafad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
