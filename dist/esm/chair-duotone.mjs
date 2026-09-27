export const name="chair-duotone";
export const id="dl_c4416fc9b3d34f959a3c";
export const url=new URL("../icons/chair-duotone.svg?v=67085717324c6ad14ad9e978ac55fa40bc10180c9d8602aeecc52aa5ab3603cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
