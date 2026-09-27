export const name="wave-square-duotone";
export const id="dl_14903e7690e1a324561e";
export const url=new URL("../icons/wave-square-duotone.svg?v=34bb3d3f826eb0e07df221aa6a7eb9f14ec014bfa20ed0b7db0fcdce98c38ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
