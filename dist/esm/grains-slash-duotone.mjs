export const name="grains-slash-duotone";
export const id="dl_77e51f9ac2b7459f90a6";
export const url=new URL("../icons/grains-slash-duotone.svg?v=3a32a61b3a9027eb9c5e4ecf5b7ab4553a960ee7286e015be546ac2d27a9b117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
