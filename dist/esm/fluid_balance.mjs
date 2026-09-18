export const name="fluid_balance";
export const id="dl_b1bc57e956c14f63a420";
export const url=new URL("../icons/fluid_balance.svg?v=edbd749f4b0342e8a72705d1e2f628f4073262b6e8887532834f67e16a08000a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
