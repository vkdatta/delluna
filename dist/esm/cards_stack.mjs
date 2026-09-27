export const name="cards_stack";
export const id="dl_797c29a04406b046e9f8";
export const url=new URL("../icons/cards_stack.svg?v=64bf7f6815bd3e1b62e097842bc14d4ca54796183b35d3cbf9c495e4621596f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
