export const name="wine_bar-fill";
export const id="dl_8f7e4c0dcd9616ef1f33";
export const url=new URL("../icons/wine_bar-fill.svg?v=d9a16e8f82e4b8dc4c0f2a0df801901b58eab73e0d2924a71d4ed6cbac00c804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
