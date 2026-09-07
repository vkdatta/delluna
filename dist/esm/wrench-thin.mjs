export const name="wrench-thin";
export const id="dl_ae7ce2d22964480999b1";
export const url=new URL("../icons/W/wrench-thin.svg?v=be119ae243f68ccaa285f02f35f81024f3031c170f6a4d94d5468a5cab2e9042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
