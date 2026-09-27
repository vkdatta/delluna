export const name="military_tech-fill";
export const id="dl_2855912bb3160080d42d";
export const url=new URL("../icons/military_tech-fill.svg?v=335625cecb445d8787533d26f4c6ae59e1d9b438c035f536e7a7dc8a91b98838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
