export const name="stat_1-fill";
export const id="dl_468e76ff22c712ab26bc";
export const url=new URL("../icons/stat_1-fill.svg?v=9e0983db3d4aaae2da595ccb451e80d69d7c2a51c495f4bb9c593d1c67002b4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
