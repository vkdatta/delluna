export const name="south-fill";
export const id="dl_c85b7157489747a7902a";
export const url=new URL("../icons/S/south-fill.svg?v=9e6f9b9238618f8a24e759943b18a7c8006d16d13b7c8d202e10fe8ff44d783e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
