export const name="lucid_1-compass";
export const id="dl_2685ce46ba2746bdabf7";
export const url=new URL("../icons/lucid_1-compass.svg?v=df761430e1e7c80e8c5a77686b0ff2b5cd05f344f6b385db69842cbcad611970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
