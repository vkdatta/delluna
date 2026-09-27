export const name="fingerprint-simple-fill";
export const id="dl_fbc26abe55824a05b1c9";
export const url=new URL("../icons/fingerprint-simple-fill.svg?v=680b04bba048340052271b7cb9727a3d3dc6d412774647dc289a7b9e2b6595cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
