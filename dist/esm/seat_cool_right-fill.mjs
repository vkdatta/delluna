export const name="seat_cool_right-fill";
export const id="dl_e106105b2a1ee7f72117";
export const url=new URL("../icons/seat_cool_right-fill.svg?v=8c4b9747b488e58047f78c8ac27c15beb4ce9d2b727b078d208c7a5b3513351c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
