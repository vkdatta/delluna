export const name="procedure";
export const id="dl_a89e9a957e9f497496ce";
export const url=new URL("../icons/procedure.svg?v=a5e25287b19392ecb2a1831cee2357cef583633f641d9311c600c5bc19b86d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
