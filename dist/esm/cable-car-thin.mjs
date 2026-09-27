export const name="cable-car-thin";
export const id="dl_4ea483096cc34173aa19";
export const url=new URL("../icons/cable-car-thin.svg?v=995afb22425dbbaf46746bec35827f66aff4d324dd98036bf63eff8dec167c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
