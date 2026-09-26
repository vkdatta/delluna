export const name="functions";
export const id="dl_f4db5dad035d434b8723";
export const url=new URL("../icons/material_symbols/functions.svg?v=95ebc053b7c246a21f44d366abca533026503403915ca4b73fe8ef95d9cd86ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
