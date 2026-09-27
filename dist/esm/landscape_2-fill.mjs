export const name="landscape_2-fill";
export const id="dl_0644eab30a426cf8e4b3";
export const url=new URL("../icons/landscape_2-fill.svg?v=3cf8f8197c0bb7ae72cef43dd9b165eb4285fb6a4141631208d866b351a98a18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
