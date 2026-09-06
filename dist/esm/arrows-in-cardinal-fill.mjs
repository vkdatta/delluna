export const name="arrows-in-cardinal-fill";
export const id="dl_3fafd6da0bdd49bdaa9e";
export const url=new URL("../icons/arrows-in-cardinal-fill.svg?v=93103530fa690162b12c43d1cb989a06b82cbaa9a934f163aad6d97ee6e5f1e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
