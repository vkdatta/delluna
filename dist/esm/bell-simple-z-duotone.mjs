export const name="bell-simple-z-duotone";
export const id="dl_3e6ffdd24ece435da644";
export const url=new URL("../icons/bell-simple-z-duotone.svg?v=f7a2af710413e864ebc2d0926c7e61c26b60b8267d84e1f02a93e019bf4bcc69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
