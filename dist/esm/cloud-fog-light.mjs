export const name="cloud-fog-light";
export const id="dl_cb26cf3e6b2b435390c2";
export const url=new URL("../icons/cloud-fog-light.svg?v=f13d1379b37834107d79c71d8fadabaf9425afcf26edd9bc1e3669eaa7c82fe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
