export const name="thick-rim-circle";
export const id="dl_a65f52f970b7c7a5894d";
export const url=new URL("../icons/thick-rim-circle.svg?v=5ff97d828cfb7327cd109a1e8f02dd987f35d3fbfd2bc9b67bc986a9fb431184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
