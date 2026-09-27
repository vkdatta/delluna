export const name="traffic-cone-thin";
export const id="dl_73f2ecd64a94594489a3";
export const url=new URL("../icons/traffic-cone-thin.svg?v=58c01ee8b2b2240db5ae06f74f29b5140ddd61c28cec4c6089ba50ee53475c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
