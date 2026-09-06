export const name="devices";
export const id="dl_6cf085bc764f4bb08e05";
export const url=new URL("../icons/devices.svg?v=eef33b37db84ff5ab0e69570cd82363e27f015f90a7307ac918193c6c7b122e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
