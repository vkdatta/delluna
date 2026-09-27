export const name="plus-circle-fill";
export const id="dl_186973a718e0413e9526";
export const url=new URL("../icons/plus-circle-fill.svg?v=3347dda2e203ca986ad2fa63cce5f5177b52fed3f9f5e05568e9a703a3abc534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
