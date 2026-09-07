export const name="hand-arrow-up";
export const id="dl_d88f8a191acc47579639";
export const url=new URL("../icons/hand-arrow-up.svg?v=6ca5fc2d123ae012b26bb8ad85324be22d72593b76344ca6912c920d5ce1174d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
