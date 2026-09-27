export const name="unpaved_road";
export const id="dl_fbcb943e7724d845172c";
export const url=new URL("../icons/unpaved_road.svg?v=205803fccb0869fa3e9abeb1ceff4d8bbb31822faa1e6b6fe46f0cbbb9fbee59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
