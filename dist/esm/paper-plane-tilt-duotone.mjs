export const name="paper-plane-tilt-duotone";
export const id="dl_aeb249cf7b7347c6b48e";
export const url=new URL("../icons/paper-plane-tilt-duotone.svg?v=9e723cb4ed3d7f0ca3fb21986bcccff5e2a05d87c7b9b7e2de02c124ff52dbd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
