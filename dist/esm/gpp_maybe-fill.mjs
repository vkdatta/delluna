export const name="gpp_maybe-fill";
export const id="dl_53f4e015d2094ad3b246";
export const url=new URL("../icons/gpp_maybe-fill.svg?v=d4d774eb4ad33738c5e6ecc05ee242850c8a08ba19ab0e028707969fb0f1d940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
