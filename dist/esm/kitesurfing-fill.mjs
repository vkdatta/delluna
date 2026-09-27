export const name="kitesurfing-fill";
export const id="dl_3d1d7ccc6a540ccde8fc";
export const url=new URL("../icons/kitesurfing-fill.svg?v=0a56d0cbd423a62f9d911f92fb426736833adce5a2b38abbf455509ab75bccf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
