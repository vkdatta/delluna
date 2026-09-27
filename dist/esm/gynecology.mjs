export const name="gynecology";
export const id="dl_d4f55ed60fc2c890b33d";
export const url=new URL("../icons/gynecology.svg?v=63c510a0bcb754f3fe8bca8d4d3b01b2fdca65a003f4e4737434f7849a047f13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
