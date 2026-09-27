export const name="pen-nib-straight";
export const id="dl_145e8c13cde74dc2ac15";
export const url=new URL("../icons/pen-nib-straight.svg?v=0d65d250d192de5c32b94b199643ac8a4d29a879a6ca288e861dd1eb16f95227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
