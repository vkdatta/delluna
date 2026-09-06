export const name="cactus-fill";
export const id="dl_76a2befd333446d78670";
export const url=new URL("../icons/cactus-fill.svg?v=bc6de75036723ee89a4633fd77747583ec176a1f95b14bbb44087e46588ad1dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
