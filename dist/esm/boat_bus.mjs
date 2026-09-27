export const name="boat_bus";
export const id="dl_2d60476b7246511c5dff";
export const url=new URL("../icons/boat_bus.svg?v=a6d8c886fc47a1e7e145e0905b38a1cd8f87b82ac46d40dd94ff0c2d4dc55c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
