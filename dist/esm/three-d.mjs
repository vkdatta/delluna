export const name="three-d";
export const id="dl_3914a938929514314c6a";
export const url=new URL("../icons/three-d.svg?v=e12fcce73dc65ae64d7312520ee956fa91557a56684e7faa0f8d20b7f87a6df0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
