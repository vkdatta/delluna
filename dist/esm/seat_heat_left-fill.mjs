export const name="seat_heat_left-fill";
export const id="dl_372a44f318364e22b8b9";
export const url=new URL("../icons/S/seat_heat_left-fill.svg?v=3494f96c76af37bd40d44b71ea3c2ef810d92092edf76300f2c40b77f6df7aa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
