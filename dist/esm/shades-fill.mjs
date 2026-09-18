export const name="shades-fill";
export const id="dl_63c860edb2484f92a28e";
export const url=new URL("../icons/S/shades-fill.svg?v=d319e46ef52c70d449d16e3e365b97d3c9fe64f7737f122e4c37f987ff2a9570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
