export const name="where_to_vote-fill";
export const id="dl_c7ddfd9d3151468786bd";
export const url=new URL("../icons/W/where_to_vote-fill.svg?v=a1b7eeff63e804ee3a2ab6dbf275caf28991f7b553b7c3a99dd9416d87f440e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
