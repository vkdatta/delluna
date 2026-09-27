export const name="handshake-fill";
export const id="dl_515077f047c34058a159";
export const url=new URL("../icons/handshake-fill.svg?v=d27c93f639937189ecc0154c4a7943d40edff2e6cddbab784e7750e3676d7365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
