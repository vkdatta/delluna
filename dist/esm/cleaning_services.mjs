export const name="cleaning_services";
export const id="dl_6c21f9929c274c8a4ceb";
export const url=new URL("../icons/cleaning_services.svg?v=a909f9995ea4e338bcfdbf3c89926bfdd495d078d7d3abe965031024d6a941b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
