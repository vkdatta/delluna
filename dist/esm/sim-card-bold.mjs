export const name="sim-card-bold";
export const id="dl_701f29309dbf4b8da532";
export const url=new URL("../icons/S/sim-card-bold.svg?v=d4b47a8e5693ba30f97a5db9f287c58348ee76835c55fa45895515afe58fcf51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
