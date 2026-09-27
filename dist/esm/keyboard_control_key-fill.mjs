export const name="keyboard_control_key-fill";
export const id="dl_bd44dffbc61973f4d2a2";
export const url=new URL("../icons/keyboard_control_key-fill.svg?v=8700b90e212e70855057d9d5c9c639ae30327520690c4fe26831607aae96f62c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
