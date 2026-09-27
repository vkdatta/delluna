export const name="touch_app";
export const id="dl_6d473479b78ff40c6a28";
export const url=new URL("../icons/touch_app.svg?v=27ed45ffb0be85d42bad3f785d47d0c81398e9868f6e167912477abb25491c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
