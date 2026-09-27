export const name="gamepad_circle_down-fill";
export const id="dl_685e28d40840e9bb801c";
export const url=new URL("../icons/gamepad_circle_down-fill.svg?v=7a28309cfa57be09820b6fcf752e74484b167d9c99f3cc0cd307805cda74d15c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
