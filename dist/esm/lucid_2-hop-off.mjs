export const name="lucid_2-hop-off";
export const id="dl_e1fdd9e32b5e41fa97c3";
export const url=new URL("../icons/lucid_2-hop-off.svg?v=2d59bb119084b7a66d730d4c05dd4946261336b7e22f661b27f5b3ccd5db6fe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
