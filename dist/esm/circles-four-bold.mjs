export const name="circles-four-bold";
export const id="dl_44ab3285f2a44d5c93c7";
export const url=new URL("../icons/circles-four-bold.svg?v=9f235a424b8cd059824a5dc75fb16be002e1ffd13fdfd90046ab2cfb90e7d8ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
