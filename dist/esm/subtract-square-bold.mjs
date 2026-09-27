export const name="subtract-square-bold";
export const id="dl_e8147e9451f0ee83b5f0";
export const url=new URL("../icons/subtract-square-bold.svg?v=84c49f1bbd9242064850f9667da481854dab9571491fa41f66c2103597d9bc54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
