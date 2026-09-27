export const name="ambulance-bold";
export const id="dl_7bb8ad2abeb242f9ad01";
export const url=new URL("../icons/ambulance-bold.svg?v=e4796a1e834f64397efcd52ed5230919b794bd088e4f0eeecd30e670f63bfdeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
