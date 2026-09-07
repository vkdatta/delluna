export const name="car-battery-fill";
export const id="dl_1a26d7bcab4540039a8f";
export const url=new URL("../icons/car-battery-fill.svg?v=eb15ddbb64ac20730a2b7a0e3c9604a8c9f7f11fbd8a7536c9e120fe2f84843f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
