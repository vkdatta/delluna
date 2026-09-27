export const name="island";
export const id="dl_ced74f7b393b438cb870";
export const url=new URL("../icons/island.svg?v=827efc018409562b9afc67cbb70ed444d0d8c7f4b3a1ee311611c3c06d0cf9a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
