export const name="magnification_large-fill";
export const id="dl_3f94c1714f24b85fb3a5";
export const url=new URL("../icons/magnification_large-fill.svg?v=4f22b28f60d46ca2ef55c95c4a2fa1a746d5a48b7ea115abb1f4d7cb706cbfe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
