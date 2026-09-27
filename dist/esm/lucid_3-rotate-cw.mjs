export const name="lucid_3-rotate-cw";
export const id="dl_f53d685902a9427f9b7d";
export const url=new URL("../icons/lucid_3-rotate-cw.svg?v=111be410e99f27181b721f051c030bdec3abbec910361d8813b7472985f3918b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
