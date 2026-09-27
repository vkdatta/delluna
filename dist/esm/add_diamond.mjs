export const name="add_diamond";
export const id="dl_c998286e1110fee19b3d";
export const url=new URL("../icons/add_diamond.svg?v=6852af66477c7fad8da37fc4c139775d5bc07abdcbbc66147e59e47266b1b997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
