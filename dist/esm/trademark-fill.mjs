export const name="trademark-fill";
export const id="dl_5b5c1268114d81d0a033";
export const url=new URL("../icons/trademark-fill.svg?v=19881e397e87a31b8bf22bf64852416133037179f23d98a04c265a0f6d1fa266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
