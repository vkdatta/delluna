export const name="heat_pump-fill";
export const id="dl_90384da90b7598d6dbbe";
export const url=new URL("../icons/heat_pump-fill.svg?v=83e4b4b5d6068e12b2127eb5e838d5024452567b968fa9a76000e8aa5cb20d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
