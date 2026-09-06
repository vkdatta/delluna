export const name="flame-bold";
export const id="dl_cf29fed74af0473c9191";
export const url=new URL("../icons/flame-bold.svg?v=bd9d46dab23de5ed5be0535dc7b4350c1cd9bea311099ed18bcd09f1d0d3847b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
