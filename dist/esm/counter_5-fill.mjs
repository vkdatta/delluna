export const name="counter_5-fill";
export const id="dl_f5432bf4784a440eb406";
export const url=new URL("../icons/C/counter_5-fill.svg?v=62eca99ac722b0067a22e2b734bf0c545551daf29ce2d2c32c2f674af3f44a51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
