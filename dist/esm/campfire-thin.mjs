export const name="campfire-thin";
export const id="dl_746eb4a6d79446e4bc47";
export const url=new URL("../icons/campfire-thin.svg?v=8c7284cc7653cded2f4503b46c7a6b1fce9bad82e923f5cd4a4326336de6f1d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
