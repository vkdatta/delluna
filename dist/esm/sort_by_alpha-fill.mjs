export const name="sort_by_alpha-fill";
export const id="dl_0cb221e67432a9954c1a";
export const url=new URL("../icons/sort_by_alpha-fill.svg?v=1b2304e2d6b459b5456cbccb42f520c32ad2fb278e80b3dbdaa0183ba0e5edcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
