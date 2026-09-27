export const name="my_location-fill";
export const id="dl_52bed7528c6cde49bf9d";
export const url=new URL("../icons/my_location-fill.svg?v=725e948d097446c0cb42e278d373724bad61c3309a11d83082801b9e1e3d577b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
