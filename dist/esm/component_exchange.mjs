export const name="component_exchange";
export const id="dl_d3a95b36d56b4ba4b862";
export const url=new URL("../icons/C/component_exchange.svg?v=a961c75394a9c1cd5671c1fbb6ce4074b396156815af50e2581c7380b04f156c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
