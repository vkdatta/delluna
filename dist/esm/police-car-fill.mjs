export const name="police-car-fill";
export const id="dl_832845c4734e4a1aa43e";
export const url=new URL("../icons/police-car-fill.svg?v=d15fd5cf50ba4bf76ed7423f7cc70da65f41c34a0ca065fe7b1be042aa5f8a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
