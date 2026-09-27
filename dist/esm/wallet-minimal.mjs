export const name="wallet-minimal";
export const id="dl_0eb6d3ff5e264fd18a73";
export const url=new URL("../icons/wallet-minimal.svg?v=0fbf6cf2aa8a76b635d2309446c8deee183e339c153459d1fe663f6b67c1b933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
