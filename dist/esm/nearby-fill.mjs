export const name="nearby-fill";
export const id="dl_19cd9e6dc40db65ecf5d";
export const url=new URL("../icons/nearby-fill.svg?v=4a34cd9fcbfdec0daf289afcccf4e44207373bc7e4a8a04ac3baa15d37565005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
