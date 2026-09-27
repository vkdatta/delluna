export const name="shield_card-fill";
export const id="dl_d1891332a44eb934c10a";
export const url=new URL("../icons/shield_card-fill.svg?v=90aca95731871ecdb8d3367628a447ecc87cb878d213af1c9faf05b43931c0ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
