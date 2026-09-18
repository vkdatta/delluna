export const name="electric_scooter-fill";
export const id="dl_d2a60c2f22ad4b03a710";
export const url=new URL("../icons/electric_scooter-fill.svg?v=cfec521b7978e9531e14e63b585db08b235096e771bcf58425b92af532be68cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
