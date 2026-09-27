export const name="seat_window-fill";
export const id="dl_608cb8d099150363b460";
export const url=new URL("../icons/seat_window-fill.svg?v=7eefb25ff80722132997408184e799dc9ae6f486233b1fbf962cbab035caa0af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
