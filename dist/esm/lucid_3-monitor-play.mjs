export const name="lucid_3-monitor-play";
export const id="dl_ec30c1005e9f44779631";
export const url=new URL("../icons/lucid_3-monitor-play.svg?v=7282db291033d47879bc58150eeedd2f5d62367b887bce88e71616c567f39a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
