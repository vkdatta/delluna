export const name="user-gear-fill";
export const id="dl_49a5d0c281a290bf0245";
export const url=new URL("../icons/user-gear-fill.svg?v=d11cd84eba10cbee5512a3e13d3bf27eac437796d7406db67336b8aaa7d1246b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
