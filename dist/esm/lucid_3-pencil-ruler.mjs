export const name="lucid_3-pencil-ruler";
export const id="dl_82611782319b4b059fe3";
export const url=new URL("../icons/lucid_3-pencil-ruler.svg?v=fb102201a484dc3e1a2899eef3aaba651ec4cda733bd69dfc56dc7699322e432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
