export const name="potted-plant-fill";
export const id="dl_fd110c4dbf6640fbbb34";
export const url=new URL("../icons/potted-plant-fill.svg?v=b4140a2d90e380f0d0f2478dfce28aa7b4bd06ba81b3dcd0e6c68230e8a7f822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
