export const name="compass-tool-duotone";
export const id="dl_3d8852d59ed74f42a65d";
export const url=new URL("../icons/compass-tool-duotone.svg?v=3f30dee72336e4c808bee4fab80e6ae473625d47ee6bda1ab45136a7c71bf735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
