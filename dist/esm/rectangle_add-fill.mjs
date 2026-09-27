export const name="rectangle_add-fill";
export const id="dl_8d68ce956f84618298aa";
export const url=new URL("../icons/rectangle_add-fill.svg?v=aa796b4c7fad5c6c375614c1253ba32bbb0f600f664e55f3ca36ff0d3af4dd98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
