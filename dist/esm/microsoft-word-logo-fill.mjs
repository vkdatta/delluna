export const name="microsoft-word-logo-fill";
export const id="dl_c7483667eb4f45c8b7ec";
export const url=new URL("../icons/microsoft-word-logo-fill.svg?v=bc8322ba64783c9a7914c27ed49c68b17071f4199c4d7a1d113d318a3ae6b702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
