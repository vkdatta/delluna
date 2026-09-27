export const name="thermometer_minus-fill";
export const id="dl_56ff52928fbe70e44d20";
export const url=new URL("../icons/thermometer_minus-fill.svg?v=cfe91c5e82b42bbe822be37add40669f96e195c28d7506781bb14c640c079ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
