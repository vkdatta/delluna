export const name="caret-circle-right-thin";
export const id="dl_69ca9d7207354c288298";
export const url=new URL("../icons/caret-circle-right-thin.svg?v=f7c2df5ac05c9bfc0dba931270cc14557d490f2dc3d7b656bd0e8d61bac08703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
