export const name="shield-checkered-duotone";
export const id="dl_b46907147ff26c716b63";
export const url=new URL("../icons/shield-checkered-duotone.svg?v=6ba64bd94e5d46d78ed89b646a33fe405c5454d494c35411ea38eb2ebdd741bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
