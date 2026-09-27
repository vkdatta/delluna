export const name="child_care";
export const id="dl_13615473c8cbd0717181";
export const url=new URL("../icons/child_care.svg?v=9124890238c07fa30b3d8345c592f406edbc7f568c32504812698e525d5c27d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
