export const name="picture-in-picture-duotone";
export const id="dl_05db70c023544e888511";
export const url=new URL("../icons/picture-in-picture-duotone.svg?v=cf128e023ea40172c25eb1f987e5163bc7946685a833b431dc20f5d85a4e670f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
