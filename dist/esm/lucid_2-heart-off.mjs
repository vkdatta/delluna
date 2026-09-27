export const name="lucid_2-heart-off";
export const id="dl_60d2d45fdfb14030af41";
export const url=new URL("../icons/lucid_2-heart-off.svg?v=0c3822debef0e4dfd6351e4c259f1cfcd7a834a7203b64cfc5d7041d00823a1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
