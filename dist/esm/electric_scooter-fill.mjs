export const name="electric_scooter-fill";
export const id="dl_34ce2cdaf658b773ad78";
export const url=new URL("../icons/electric_scooter-fill.svg?v=7e7a4060d5749a5107eb84302f9be8c7420520864b585fb04ee8e367bba10e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
