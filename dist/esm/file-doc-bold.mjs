export const name="file-doc-bold";
export const id="dl_3468956b264e49a9980f";
export const url=new URL("../icons/file-doc-bold.svg?v=06fc11a4a9e20d88cb2c2bbb809bf59efde5d6cb5257a162fd912685dced213a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
