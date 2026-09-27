export const name="barn-fill";
export const id="dl_f77941bc1bf84781bb79";
export const url=new URL("../icons/barn-fill.svg?v=6e577a563c6ab37b1d1ee08f4f9e45f5164b2be5ca1be37703ad0b6b678f7dfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
