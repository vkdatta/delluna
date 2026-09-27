export const name="hurricane-duotone";
export const id="dl_6f320571b1ca4b0a95e6";
export const url=new URL("../icons/hurricane-duotone.svg?v=0c64bd1c96241ce360bfa0906ae7db2ee601c06ca1495ce2565acb48087a3a65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
