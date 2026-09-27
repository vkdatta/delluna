export const name="battery_horiz_000";
export const id="dl_43340202d50a2d6d4375";
export const url=new URL("../icons/battery_horiz_000.svg?v=d846dd42abb1917a3f6900d0a5f1ea83901b62373a214096d8d189e33c88dbc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
