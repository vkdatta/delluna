export const name="call-bell-fill";
export const id="dl_c8069c63da564a2a915e";
export const url=new URL("../icons/call-bell-fill.svg?v=4ea10bedd4aeb8287e869055a4cd187714f2b139a5d6113831c1be50bc2e1657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
