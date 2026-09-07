export const name="music-notes-minus";
export const id="dl_4fd21969d83c4c1dac7f";
export const url=new URL("../icons/music-notes-minus.svg?v=13c0f4baec0276ee35da8a5c49f8a4fbbc95a4aa4588169ea6329828edcee461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
