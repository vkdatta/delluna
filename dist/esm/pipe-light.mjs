export const name="pipe-light";
export const id="dl_8b49415d827d49ccb5fe";
export const url=new URL("../icons/pipe-light.svg?v=636b6d3175b737325ffeacca3f4830a097a176a424227b7ac01d894ef2b07c5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
