export const name="unpaved_road";
export const id="dl_96bbc0020cb986d87bd5";
export const url=new URL("../icons/unpaved_road.svg?v=22c74a45dee89f5deb60501ebc5034679aa00a35e6dadf70bfb0a8877a67bcf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
