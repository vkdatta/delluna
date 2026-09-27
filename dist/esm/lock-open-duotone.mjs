export const name="lock-open-duotone";
export const id="dl_ce473e8948ec4a9cbf94";
export const url=new URL("../icons/lock-open-duotone.svg?v=cf7f2824254742e648afff89a5eb7fb72c9a674f61a855cd72499300ffffb9fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
