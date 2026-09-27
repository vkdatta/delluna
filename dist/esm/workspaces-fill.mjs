export const name="workspaces-fill";
export const id="dl_38a7f0d9d1acc1f134b6";
export const url=new URL("../icons/workspaces-fill.svg?v=1bec82a01110db3eba1ea76a8858db7a54b7e39a1b2ed502640163832b86ea63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
