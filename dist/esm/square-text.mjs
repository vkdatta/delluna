export const name="square-text";
export const id="dl_1844f3bcefe4450a873c";
export const url=new URL("../icons/square-text.svg?v=87be25bf54087111cfc1456af19b9cb6f01da56e4dad1c747663207f35579e4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
