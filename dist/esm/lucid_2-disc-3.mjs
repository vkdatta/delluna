export const name="lucid_2-disc-3";
export const id="dl_0829e8c5c7f6419d888d";
export const url=new URL("../icons/lucid_2-disc-3.svg?v=cb64ca8294ea191388a80552be509ddd2f4f2ddc90e495614b895250fdcd3e18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
