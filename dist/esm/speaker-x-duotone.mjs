export const name="speaker-x-duotone";
export const id="dl_885567a06d9a431bbef7";
export const url=new URL("../icons/S/speaker-x-duotone.svg?v=cf2ed2d1af4f54a9aeb6b66a9b7c10d60bdcfb96c34d00c08b92433dc89fd3d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
