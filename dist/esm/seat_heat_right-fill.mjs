export const name="seat_heat_right-fill";
export const id="dl_1908c4fa849c2932e1c5";
export const url=new URL("../icons/seat_heat_right-fill.svg?v=cc6c32dd16e3ddfd0f4b24dc5ed83647693a1e1281b94b410c5b13eec03a522c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
