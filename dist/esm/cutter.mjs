export const name="cutter";
export const id="dl_189f0bcd2dc54b4cac73";
export const url=new URL("../icons/cutter.svg?v=297fefbbfcf9e65aec1864372c71cf0fcbaf530e1846d030aed9de317a9e1e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
