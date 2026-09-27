export const name="vrpano";
export const id="dl_bdd5e18b9f8f64c655cb";
export const url=new URL("../icons/vrpano.svg?v=efc66701aa83bc099a4146e3c24e74e011b827bf0b4608e1012e924d957825da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
