export const name="folder_delete-fill";
export const id="dl_97f92773c1f994ee09cf";
export const url=new URL("../icons/folder_delete-fill.svg?v=ba1d221d435834b60f9cff55f128dab85ef1fe3da25aa8fd8ecc735a40292abb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
