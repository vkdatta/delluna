export const name="virtual-reality";
export const id="dl_d59945351917d2940c94";
export const url=new URL("../icons/virtual-reality.svg?v=b742b1af917099277dcd765c8e07babec198f8ca6f681128943c30911e26c2b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
