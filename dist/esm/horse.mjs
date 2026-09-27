export const name="horse";
export const id="dl_af6df556eacf48d8b55d";
export const url=new URL("../icons/horse.svg?v=b8a0691cd2387d3de8f2d54b304f3371907e70fb3c9b567e82a2cfdf8e18ca3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
