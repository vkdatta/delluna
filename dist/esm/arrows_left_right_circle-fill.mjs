export const name="arrows_left_right_circle-fill";
export const id="dl_17537a18a55e2c399af8";
export const url=new URL("../icons/arrows_left_right_circle-fill.svg?v=0bdd85c9db346f55fb4dc018f80c64e98adb4ee31a39ff8226c91ec6875aef54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
