export const name="squirrel";
export const id="dl_5a30065b4063424c86f1";
export const url=new URL("../icons/squirrel.svg?v=63a861670db8f28f1524a9124fdb9f0eefbcf9b34353e53c30dab1839b1bd693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
