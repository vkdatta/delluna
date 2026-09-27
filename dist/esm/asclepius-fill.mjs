export const name="asclepius-fill";
export const id="dl_413c10ca14ff411b88bc";
export const url=new URL("../icons/asclepius-fill.svg?v=246ccdb7f517842d4610f07b5666bcad9678cf3dc95a84d4adac4b16859fb523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
