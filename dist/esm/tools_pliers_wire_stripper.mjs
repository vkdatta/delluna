export const name="tools_pliers_wire_stripper";
export const id="dl_4507ff5555c91b47b649";
export const url=new URL("../icons/tools_pliers_wire_stripper.svg?v=fc3da57fb441f44172a4243eed278d8b7c91b6947771fffac3f43e57f0455975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
