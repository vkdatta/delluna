export const name="ladder-duotone";
export const id="dl_5ed6d3b55ec947219f2f";
export const url=new URL("../icons/ladder-duotone.svg?v=02c3d04000638cbf640ef94f88f99603e3dcc237b45d7127dc06d68e97fcfa6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
