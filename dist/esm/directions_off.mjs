export const name="directions_off";
export const id="dl_f9713be873e7e4bf944e";
export const url=new URL("../icons/directions_off.svg?v=f17c10ed3931634bcdc9865be36c8bf30c05c816e0589ebd7e0214a4fe4c1a3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
