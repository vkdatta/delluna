export const name="fan_focus-fill";
export const id="dl_a237d4f96fb2c9be0b24";
export const url=new URL("../icons/fan_focus-fill.svg?v=82169300134e02269e5d9922e5d67ec00f28c12c9bce9610272adde4b1074bde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
