export const name="undereye";
export const id="dl_04cf7eb58d4343408893";
export const url=new URL("../icons/undereye.svg?v=102a473b88db23b87a6d5ca803a5ba93675d3c241243dc016e55652b9f864771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
