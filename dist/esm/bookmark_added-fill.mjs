export const name="bookmark_added-fill";
export const id="dl_95f5369e70424db1b74d";
export const url=new URL("../icons/bookmark_added-fill.svg?v=c921a38e7cad760a8be3624fe2bb5f6be9c05dfdc97751e40bde924efd9af7e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
