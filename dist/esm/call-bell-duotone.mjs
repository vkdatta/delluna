export const name="call-bell-duotone";
export const id="dl_0206e79940404bfca3f8";
export const url=new URL("../icons/call-bell-duotone.svg?v=bb521f5a78c927b7333f673c01d24c6401c1c229a9b05c9cbb7b995d82fbb433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
