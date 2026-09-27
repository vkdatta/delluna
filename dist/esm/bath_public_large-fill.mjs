export const name="bath_public_large-fill";
export const id="dl_862c9963bff1a1b18b2f";
export const url=new URL("../icons/bath_public_large-fill.svg?v=9dc8f4c5274631fd31d243b2f5ba393a0da9d1b018d54578d66856e73c394554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
