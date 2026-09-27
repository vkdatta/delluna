export const name="lucid_2-fingerprint-pattern";
export const id="dl_03d43c10da864f87a9a8";
export const url=new URL("../icons/lucid_2-fingerprint-pattern.svg?v=57d8a84d3f289fad6e40c05ade3a911700b5264f48671fd7e55a5d1d0180f99d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
