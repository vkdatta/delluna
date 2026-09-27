export const name="menu-fill";
export const id="dl_71d70a84dec1919158dd";
export const url=new URL("../icons/menu-fill.svg?v=001b663b8f0bea6ba2783deaedb561f517f78861858228309318db316e093054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
