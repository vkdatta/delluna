export const name="pinterest-logo-bold";
export const id="dl_6facd3cd829b4df0a586";
export const url=new URL("../icons/pinterest-logo-bold.svg?v=6377d0e00408122998307a9ded2a5d58b11a2a4a751f86d1fc534f0d04bdb808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
