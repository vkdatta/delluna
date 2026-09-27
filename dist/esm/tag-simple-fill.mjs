export const name="tag-simple-fill";
export const id="dl_14673a8cb90224b16d0d";
export const url=new URL("../icons/tag-simple-fill.svg?v=fe801835d7b7616d86104bafc28f62bd1592cf6af0a7b8fc06df4bc0f7d394dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
