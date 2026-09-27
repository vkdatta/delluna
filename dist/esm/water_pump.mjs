export const name="water_pump";
export const id="dl_6be286165086a52c49d6";
export const url=new URL("../icons/water_pump.svg?v=9cb4f02bba4f990780fba0f81d298801414f336cee960524e655654f50d01094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
