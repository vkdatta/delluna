export const name="block";
export const id="dl_dfab03cd72127110c98d";
export const url=new URL("../icons/block.svg?v=e1fe34a00461c458def9adfca1f9b239de4a861c871b3085566be6ac04f40fe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
