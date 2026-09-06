export const name="archive-bold";
export const id="dl_0c0da38bc1af4aa7a58d";
export const url=new URL("../icons/archive-bold.svg?v=cc4564fc600957e3992483ef502ef0e0157fef393fb388842e5644d8a24cc444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
