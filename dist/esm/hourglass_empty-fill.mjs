export const name="hourglass_empty-fill";
export const id="dl_d3e8fb18178449e2b10d";
export const url=new URL("../icons/hourglass_empty-fill.svg?v=958d0fa577b79759e7c20065f9de164e07c0cf0057299a45d12d8057c0b744b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
