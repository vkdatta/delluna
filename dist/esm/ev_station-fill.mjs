export const name="ev_station-fill";
export const id="dl_e1c0843d314c23d1e6b3";
export const url=new URL("../icons/ev_station-fill.svg?v=3ca4b3d7f2f307450fff46adf7057371ae7a29dd93448cfbea9dd437364e2500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
