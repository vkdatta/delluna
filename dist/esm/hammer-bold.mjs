export const name="hammer-bold";
export const id="dl_959605dff1e14bc49c68";
export const url=new URL("../icons/hammer-bold.svg?v=35a90bfaa88e4e8db27849219c038677a6295e8cf48db5bf74582079cd7093ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
