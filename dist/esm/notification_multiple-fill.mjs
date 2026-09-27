export const name="notification_multiple-fill";
export const id="dl_761ed52faba34431da7a";
export const url=new URL("../icons/notification_multiple-fill.svg?v=3a0907b4e78df1dab9266e064f8c86ef71eda6cb48f2d5fb95ab4b2a2d3d8b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
