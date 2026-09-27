export const name="cell_tower-fill";
export const id="dl_403dcf0717ec3863c2a8";
export const url=new URL("../icons/cell_tower-fill.svg?v=66867f27310ae800fa8b4cf8bba8c888b6925efe8d03ef85afc20fbd22593282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
