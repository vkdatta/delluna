export const name="my_location";
export const id="dl_ec6d1c8997355b2d7683";
export const url=new URL("../icons/my_location.svg?v=79261794614ffa9fee70de8311035b513f8b355bbad960f17227d32d5055ed3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
