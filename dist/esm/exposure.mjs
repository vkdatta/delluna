export const name="exposure";
export const id="dl_19f01965b0b53c7713c1";
export const url=new URL("../icons/exposure.svg?v=99cefba555cf45bec22f0f14d64b1fb606d9d4d201c1aa72d1d980727edb9cfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
