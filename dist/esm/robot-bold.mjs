export const name="robot-bold";
export const id="dl_bf4edc78349e41839789";
export const url=new URL("../icons/robot-bold.svg?v=a99282b21cad922ff594b4bdd2833e16675afd1148ed6c1120519be5c6c45ee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
