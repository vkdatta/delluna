export const name="tilt_arrow_up";
export const id="dl_617bc29230102b13bb2c";
export const url=new URL("../icons/tilt_arrow_up.svg?v=683043bfd9f39ea2e0a0ec541c5910c44bea4051543c9c954620af7a2826d865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
