export const name="lucid_2-fingerprint-pattern";
export const id="dl_03d43c10da864f87a9a8";
export const url=new URL("../icons/lucid_2-fingerprint-pattern.svg?v=2277b3b5c8f4ceeb93fe2178516c74ec3eb3c3260d0aefc24a9244a4f5bd5eea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
