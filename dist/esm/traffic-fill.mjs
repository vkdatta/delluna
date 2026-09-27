export const name="traffic-fill";
export const id="dl_4c55db9299a9197d40a5";
export const url=new URL("../icons/traffic-fill.svg?v=b75d618ef66ffd09fe2847edfd7505e124d71a1cd3245a40232006364063f8b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
