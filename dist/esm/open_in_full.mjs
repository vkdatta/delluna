export const name="open_in_full";
export const id="dl_c231d18a744acd925d60";
export const url=new URL("../icons/del/open_in_full.svg?v=2962abe13fe45da5293fdf6f9e0fb0eacc8b66f060ee0e05287b1e22476d1062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
