export const name="trademark-registered-duotone";
export const id="dl_ab774971e53a23785de0";
export const url=new URL("../icons/trademark-registered-duotone.svg?v=ea48d70dff4ff8966b457caa30309e91e88d8e8dd7b637c3d60195ceaca19780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
