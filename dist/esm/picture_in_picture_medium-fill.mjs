export const name="picture_in_picture_medium-fill";
export const id="dl_47cad093d429ae3c3377";
export const url=new URL("../icons/picture_in_picture_medium-fill.svg?v=0dfe53304470f547a57f7f0b15e011cb0be73fd3cbf397be9880ecd39a7738a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
