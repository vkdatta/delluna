export const name="shield-checkered-light";
export const id="dl_c653daaff43a4c9f8344";
export const url=new URL("../icons/S/shield-checkered-light.svg?v=454595559e04501960d750433fc08a01e690d48e19fc755949c7725ec49d763e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
