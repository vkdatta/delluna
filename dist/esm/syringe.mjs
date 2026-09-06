export const name="syringe";
export const id="dl_7b659ab2f0c8471c9583";
export const url=new URL("../icons/syringe.svg?v=925ebb5ae1ef446f155564b7dbf7b8356ade8c0c89cf4569c370fe5792cdb344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
