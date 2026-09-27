export const name="car_mirror_heat";
export const id="dl_8b81ce84cd38a3d7b074";
export const url=new URL("../icons/car_mirror_heat.svg?v=c3ada2886a8d7752ae5066d32c3172c7099431f9834fc164b96ff0cc334132e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
