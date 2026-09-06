export const name="ladder-bold";
export const id="dl_4bf473dc550a44048693";
export const url=new URL("../icons/ladder-bold.svg?v=92dce9cc1de25e582d3ea7dda90f35a3d7451af256fa6d3d6ba719c0a36a22bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
