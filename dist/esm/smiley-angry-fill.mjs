export const name="smiley-angry-fill";
export const id="dl_47a9ce675d02efbcc283";
export const url=new URL("../icons/smiley-angry-fill.svg?v=87696d042eb23ab553804ebf94ce92ef94a1f59cfdea82f3df9c010fdf668f22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
