export const name="tree-deciduous";
export const id="dl_7aa48a8efcae4143ac29";
export const url=new URL("../icons/tree-deciduous.svg?v=b3bc2514fe5a6f55dfccc35f799e402a38aee4aded710e8b651decc70414ae6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
