export const name="cursor-click-fill";
export const id="dl_e9a977c09d8e4ab09f08";
export const url=new URL("../icons/cursor-click-fill.svg?v=9c06d1e000f7325d705ca3b83e78ad9e0cd007e532be63d13a951eb270a2b092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
