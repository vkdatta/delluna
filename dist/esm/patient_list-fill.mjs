export const name="patient_list-fill";
export const id="dl_d639ddef7294223403f7";
export const url=new URL("../icons/patient_list-fill.svg?v=910666b14907ab8f5d5df14d4632fd56dac4559e3ae051ce597b5fe7f13ee09c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
