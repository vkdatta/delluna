export const name="universal_local";
export const id="dl_e07352e1e4e51b10d574";
export const url=new URL("../icons/universal_local.svg?v=40707a318299ae77f6eb00fd367f45572c95af2a2cd3872c3c031b4cbccd1e61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
