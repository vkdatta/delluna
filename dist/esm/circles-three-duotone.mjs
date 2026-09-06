export const name="circles-three-duotone";
export const id="dl_861c4fdd567f41808c45";
export const url=new URL("../icons/circles-three-duotone.svg?v=7a479c27397db4122c4893fefc65c27adeb655029e9962d4cd3b11a44ea17a4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
