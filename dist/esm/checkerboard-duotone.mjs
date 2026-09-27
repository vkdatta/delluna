export const name="checkerboard-duotone";
export const id="dl_0db7d1788fc747a8ab72";
export const url=new URL("../icons/checkerboard-duotone.svg?v=ce50e9b4c3c9757e45e56c69a1262a35db927e3f108b7a00447273eebfa95a36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
