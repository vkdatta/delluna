export const name="circles-fill";
export const id="dl_072acf1e37484163bd16";
export const url=new URL("../icons/circles-fill.svg?v=70da1407bf9ddae31c4150768900eb91de07fa1705faab485b08988da11c55d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
