export const name="assistant_navigation-fill";
export const id="dl_c1248560f755f444b201";
export const url=new URL("../icons/assistant_navigation-fill.svg?v=9b798495e627129424961e3c21ff74975355dc33f83f255e18ab8d01629d604a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
