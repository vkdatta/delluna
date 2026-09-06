export const name="circles-three-plus-duotone";
export const id="dl_ee38232649b54373bc31";
export const url=new URL("../icons/circles-three-plus-duotone.svg?v=6db1373c41c6c0576bff6a0d627ac6bc5e02c86d1052135b7f6e129c7221e9e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
