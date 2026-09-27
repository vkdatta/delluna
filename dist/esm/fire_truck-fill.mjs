export const name="fire_truck-fill";
export const id="dl_4b8154a849466d93f84f";
export const url=new URL("../icons/fire_truck-fill.svg?v=8e01e775f011d3ecdb57c36a8f8ad035ac700725847e7eb7b24dea3ed39d3475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
