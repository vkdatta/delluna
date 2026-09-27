export const name="phone_callback-fill";
export const id="dl_a8fcc27c06cffd456a6f";
export const url=new URL("../icons/phone_callback-fill.svg?v=50aae6dd94b377e5876e03c082a1630d06559e6317a430906eab99dec9b41e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
