export const name="selection-inverse-fill";
export const id="dl_3f2c0d1c41edec5ab1a3";
export const url=new URL("../icons/selection-inverse-fill.svg?v=bf7779559baeb91bde879d4c82b528b6d20a574af57ab4aacd1ceca2c414e740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
