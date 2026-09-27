export const name="ticket-x";
export const id="dl_94e2ba5e6e934e6898f6";
export const url=new URL("../icons/ticket-x.svg?v=01f9a5647d3d2ec5fa1f58c6c2604c54ffe527f16f5903fe1fa4df61634ce50c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
