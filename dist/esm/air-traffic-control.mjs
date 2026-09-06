export const name="air-traffic-control";
export const id="dl_35a8bbcf905240069c1b";
export const url=new URL("../icons/air-traffic-control.svg?v=1c425e458ac8020243d503b1a693c82f1f0959efccae3de278dd20955c317b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
