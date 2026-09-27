export const name="gynecology-fill";
export const id="dl_4183849348950da14560";
export const url=new URL("../icons/gynecology-fill.svg?v=996fed7dd4c99d9e733b19d6970cf3f0f2d0ca67820966d6fb54df1f9013c7c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
