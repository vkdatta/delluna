export const name="joystick-duotone";
export const id="dl_20e01f2956fb44b6b360";
export const url=new URL("../icons/joystick-duotone.svg?v=177b4c04c41b4f7cf762a73c49e202c883513ff232ee60dd2b78d075327e2612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
