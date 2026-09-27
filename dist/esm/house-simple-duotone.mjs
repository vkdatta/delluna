export const name="house-simple-duotone";
export const id="dl_294d8bd977cd4b3d88a1";
export const url=new URL("../icons/house-simple-duotone.svg?v=431ced976f5843e43a40137780236b2030675847e18b81264215168c1c281a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
