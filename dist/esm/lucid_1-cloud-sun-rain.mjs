export const name="lucid_1-cloud-sun-rain";
export const id="dl_a694de2178bd4fc6a495";
export const url=new URL("../icons/lucid_1-cloud-sun-rain.svg?v=94fa99d3e4d3a0421cbd4f85a18bee71ed3166333cc1bfbe8327280f50dd36b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
