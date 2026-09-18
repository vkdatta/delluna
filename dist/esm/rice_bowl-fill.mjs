export const name="rice_bowl-fill";
export const id="dl_168656f1164d41618f22";
export const url=new URL("../icons/R/rice_bowl-fill.svg?v=1bf6d088e802da7a9dd73c7f2f01c75e2672fe5d4e2499e43685d30ba0680759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
