export const name="sim_card";
export const id="dl_2bb6f2c2c2bbd1cdb3bb";
export const url=new URL("../icons/sim_card.svg?v=1571d0e3e54937792a05031cf502f3bf93aee019fd47ba2b1d00d93769638f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
