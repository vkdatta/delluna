export const name="nchor";
export const id="dl_b16c2fe01cb14698a9fc";
export const url=new URL("../icons/nchor.svg?v=a8509ad98b1014f74c56d33d15e23ca08be0906a93eab1420235f3bdd5d3976c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
