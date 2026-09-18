export const name="mode_heat_off";
export const id="dl_7f4ecc70045d494f82ed";
export const url=new URL("../icons/M/mode_heat_off.svg?v=48ebdf6aa5830ac447f4e70276918e1cb0095b55b414d949d4188378dda24b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
