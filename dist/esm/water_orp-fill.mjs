export const name="water_orp-fill";
export const id="dl_43892257180b04bcaf53";
export const url=new URL("../icons/water_orp-fill.svg?v=148d311481a579c5fcac58fb1cf94b6fb529abb8ab3cfbba1412376bbdd31f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
