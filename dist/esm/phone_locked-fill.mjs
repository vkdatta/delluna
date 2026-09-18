export const name="phone_locked-fill";
export const id="dl_65bb88aadc2b4f438cd1";
export const url=new URL("../icons/phone_locked-fill.svg?v=55acc176a771e6c79049657c38b90e000ff043fcf9308cd2370c6fac4ea72eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
