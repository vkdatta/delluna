export const name="sun-dim-fill";
export const id="dl_c6a4f3386003462b9582";
export const url=new URL("../icons/S/sun-dim-fill.svg?v=f2feebd73bcedacb79f0c6f51d103f60e65cff56545355c8d14dd34861f03c0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
