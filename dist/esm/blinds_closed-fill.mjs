export const name="blinds_closed-fill";
export const id="dl_844ec7e3dd84a2879aa5";
export const url=new URL("../icons/blinds_closed-fill.svg?v=34a92286ff006028390c53504725a70bfc27453bc74d551de9531fdaf74e25f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
