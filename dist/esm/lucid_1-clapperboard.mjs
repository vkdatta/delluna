export const name="lucid_1-clapperboard";
export const id="dl_bfab0c69cd3d42689bc7";
export const url=new URL("../icons/lucid_1-clapperboard.svg?v=ae986e683fc15e5f2f51fa1c0c57452d2dc9f9c088c206b8be4f36e8441a85b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
