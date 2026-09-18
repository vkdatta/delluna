export const name="vrpano-fill";
export const id="dl_9d411d35da134d35a410";
export const url=new URL("../icons/vrpano-fill.svg?v=7b5e373001d7e88082e66f265d7929216c3d8c9f195ab6205795e626a722a318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
