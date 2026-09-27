export const name="user-rectangle-light";
export const id="dl_a3392cdff8c7004f3233";
export const url=new URL("../icons/user-rectangle-light.svg?v=7e756534baade05a64dbda045b18606e80a4aedb6e4575396224b3dd85033e85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
