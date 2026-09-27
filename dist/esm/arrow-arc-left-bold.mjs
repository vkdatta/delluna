export const name="arrow-arc-left-bold";
export const id="dl_de8b282338884b3490cd";
export const url=new URL("../icons/arrow-arc-left-bold.svg?v=e823a21a58e6a8b529dae6109dd14604275005dbff741c96281d248257caa26a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
