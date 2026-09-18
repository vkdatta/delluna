export const name="logo_dev-fill";
export const id="dl_efa519c6807e48acbaf4";
export const url=new URL("../icons/L/logo_dev-fill.svg?v=ab637cbcc3015becb1bab684b855fa9b0beedc03a2478dc5a3a34d7fbc47df18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
