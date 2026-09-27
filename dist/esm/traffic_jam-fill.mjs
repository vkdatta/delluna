export const name="traffic_jam-fill";
export const id="dl_e2893f3a56d47dfc4873";
export const url=new URL("../icons/traffic_jam-fill.svg?v=c0a707678e29aeafadb470731f16daa6ae2f394e533d5231d3baa23b0f4a6a5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
