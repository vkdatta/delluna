export const name="beach-ball-bold";
export const id="dl_b6fa78b34ca44cd4bde6";
export const url=new URL("../icons/beach-ball-bold.svg?v=fa2720898c21b62d858541274d100c8743dbe5ad13e75aac118f8368dcd751d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
