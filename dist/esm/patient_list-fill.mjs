export const name="patient_list-fill";
export const id="dl_83ec7e128be94771b02b";
export const url=new URL("../icons/patient_list-fill.svg?v=c47bb04584b5ec34406a2c4cb4aaedf7909885ebefb275efab5f9e458d9d6fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
