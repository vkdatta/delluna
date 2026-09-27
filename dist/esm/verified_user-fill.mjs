export const name="verified_user-fill";
export const id="dl_2693998a0ae0521d76c0";
export const url=new URL("../icons/verified_user-fill.svg?v=8d66ee4daeee1b8aeb2ec6ee381e0c68f2f37a67211b3eb7f2b8970a15f6579d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
