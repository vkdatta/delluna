export const name="photo_album-fill";
export const id="dl_a52b9cb9d9a649dcab2e";
export const url=new URL("../icons/P/photo_album-fill.svg?v=1ec509c008c0b81d363d5be3506e9da23a0f1fd49515c2f25831723b937009d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
