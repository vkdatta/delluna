export const name="gpp_maybe-fill";
export const id="dl_16d6a6d52458e20c2cad";
export const url=new URL("../icons/gpp_maybe-fill.svg?v=5ac1c348ac6becc01c342c2df71367787125ccafa0c60b2520bb978c22abb70a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
