export const name="lucid_1-case-sensitive";
export const id="dl_c0e729b923fd49caa0cb";
export const url=new URL("../icons/lucid_1-case-sensitive.svg?v=b6ed99d500ca2c3d01d93650402b9db2da7765242fec599279e2ad54e51c9ab1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
