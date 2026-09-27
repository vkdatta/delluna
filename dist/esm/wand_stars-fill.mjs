export const name="wand_stars-fill";
export const id="dl_b210877ec514f00afc59";
export const url=new URL("../icons/wand_stars-fill.svg?v=f8a997f1185063d1a517266b49f850d0fa9029b7e7feb4efeb77a7ff0dff0c7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
