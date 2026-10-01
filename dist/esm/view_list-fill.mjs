export const name="view_list-fill";
export const id="dl_ad32445d40a5c4e9843e";
export const url=new URL("../icons/view_list-fill.svg?v=251b90473ff6c10850394376699e66ce43d7414d64984455564c2c6eeaa80b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
