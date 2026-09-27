export const name="gastroenterology-fill";
export const id="dl_22e7f3cf56ffdd791a72";
export const url=new URL("../icons/gastroenterology-fill.svg?v=32fb012c220da6d9dd583d6f99ac865d405c5c0bbd605fe6d9ba31382f7397e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
