export const name="30fps";
export const id="dl_00859da90b5b1a820ad9";
export const url=new URL("../icons/30fps.svg?v=d47ba5462cfc79dff01c73b4c4d59e0476c2dad2b2d4545b6cd071861e3d6c8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
