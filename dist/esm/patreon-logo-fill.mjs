export const name="patreon-logo-fill";
export const id="dl_51862c4c738c4c9897fd";
export const url=new URL("../icons/patreon-logo-fill.svg?v=58d10a99a371b1015759edeb1fcc0e0e1d9452a3909acc8375b182aa2bb624c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
