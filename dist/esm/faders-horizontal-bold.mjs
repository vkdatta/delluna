export const name="faders-horizontal-bold";
export const id="dl_ab3d6953b92a4d459f8d";
export const url=new URL("../icons/faders-horizontal-bold.svg?v=d4a457b244bef354c7aa8616d47ef8ae90096e72df282e1c21faabd7995fc839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
