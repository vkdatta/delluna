export const name="handshake-duotone";
export const id="dl_53c1ddda4e064242b28c";
export const url=new URL("../icons/handshake-duotone.svg?v=4f8827d067f5b777902e4e6e0f1e6ccc6b60c5d34605d65ecb8020137072ebb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
