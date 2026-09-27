export const name="youtube-logo-duotone";
export const id="dl_455859c9baeddc5abfc5";
export const url=new URL("../icons/youtube-logo-duotone.svg?v=f58bcbaabdac2d7503b1d170ccca4fcd1a2adf5c8959d55023235957041dbb51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
