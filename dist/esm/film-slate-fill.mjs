export const name="film-slate-fill";
export const id="dl_20a2b39f03dd44599158";
export const url=new URL("../icons/film-slate-fill.svg?v=f4cf02bcf3bc86166e3c6d7da1173388dc5ef9bdec14f53c2b67ff31ddbc5f6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
