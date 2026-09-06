export const name="crosshair-bold";
export const id="dl_e318177c87ea4662a2ca";
export const url=new URL("../icons/crosshair-bold.svg?v=cb8556097f1484cbd969a2184cdd053ba797e6bfab1d26af4a45c80c2a3d4736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
