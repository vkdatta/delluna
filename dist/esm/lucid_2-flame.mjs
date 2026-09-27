export const name="lucid_2-flame";
export const id="dl_c365ddb61260427a8766";
export const url=new URL("../icons/lucid_2-flame.svg?v=ffdbe35133ede1f9242efa44b68a87429865ab4b5592d0246bc10e0b3741e29d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
