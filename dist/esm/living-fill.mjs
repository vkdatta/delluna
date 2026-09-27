export const name="living-fill";
export const id="dl_499f147aa890bd76227d";
export const url=new URL("../icons/living-fill.svg?v=8bc93d030a6d00d2703c8467c75e4ba718c33dadc2e34cf622f0b3988e287f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
