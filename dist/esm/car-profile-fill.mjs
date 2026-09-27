export const name="car-profile-fill";
export const id="dl_9268c29c333344c49133";
export const url=new URL("../icons/car-profile-fill.svg?v=90d5947067c04f4a1221b1d1585dc0e0bb85fc150db7a9d40ec2af535e89b4b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
