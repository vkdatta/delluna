export const name="play-circle-duotone";
export const id="dl_eabf745a837c4e8db1a0";
export const url=new URL("../icons/play-circle-duotone.svg?v=f87ad0e22b32e62059231af79a3f57fecab6f7302ad904d9efd29a44a0f5f680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
