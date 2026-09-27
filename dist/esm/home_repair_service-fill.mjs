export const name="home_repair_service-fill";
export const id="dl_d10f98e6db8c0182081c";
export const url=new URL("../icons/home_repair_service-fill.svg?v=7bde71a2bf25afdf4d6f4bdc7cd09bf48fefc9611435e96f81079616a42f3011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
