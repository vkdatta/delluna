export const name="tea-bag-fill";
export const id="dl_e828cd33d12483254f24";
export const url=new URL("../icons/tea-bag-fill.svg?v=2958d92c82a3c31012730a10d97c8c250c7f5ad5924741d058cdb58f32623e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
