export const name="volleyball-light";
export const id="dl_7bea0ca60b69fdcf9abc";
export const url=new URL("../icons/volleyball-light.svg?v=301c0cc11470066228f52788a157bef09dd3dd56b7d1839f64acc020236e05d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
