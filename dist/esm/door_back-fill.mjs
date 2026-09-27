export const name="door_back-fill";
export const id="dl_abf4d92e12c107808138";
export const url=new URL("../icons/door_back-fill.svg?v=041d3801a4c8462854d52ecbf56163ac0e40476d971c5b686864b30cb34ea4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
