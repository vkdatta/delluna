export const name="burst_mode";
export const id="dl_c9b1ea299db0350df3a2";
export const url=new URL("../icons/burst_mode.svg?v=e10a70e765f44ead4f47d2fac7c221519b4ecc294ceee764233cff1b697f1f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
