export const name="lucid_3-ruler";
export const id="dl_f412f1d4618546a99bdf";
export const url=new URL("../icons/lucid_3-ruler.svg?v=79d4f1e8df30e36253cc58412294fbb378d78f42f5825ddc5fecaf2d5f8f101e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
