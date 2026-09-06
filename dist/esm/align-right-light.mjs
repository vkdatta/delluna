export const name="align-right-light";
export const id="dl_c8759e5696bc41af9182";
export const url=new URL("../icons/align-right-light.svg?v=64ec41c12f2f2327c016712cbae6e503bb45271d13287f519d400820026e06c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
