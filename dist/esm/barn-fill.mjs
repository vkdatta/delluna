export const name="barn-fill";
export const id="dl_f77941bc1bf84781bb79";
export const url=new URL("../icons/barn-fill.svg?v=feeb921724b2cd7156887e409f9d7668580b866eba60258ffd3875965b317672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
