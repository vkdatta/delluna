export const name="arrow-circle-down-fill";
export const id="dl_cd2d68c710824cfd922c";
export const url=new URL("../icons/arrow-circle-down-fill.svg?v=55ad201e30ef64bd200bdb261d2f78a64bfac03958fe93994b07606b5dee2927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
