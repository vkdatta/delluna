export const name="demography";
export const id="dl_e20700cd03ad403483fe";
export const url=new URL("../icons/D/demography.svg?v=236e46f40c2ddfc381809b27fdd0d6cdb07c22015d0c29b93dcbd58e666c67d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
