export const name="paw-print-bold";
export const id="dl_a701a8d6207f4d678c31";
export const url=new URL("../icons/paw-print-bold.svg?v=6a2aeb02604ee81f10f78e185999500e5942ede00d938f2d4860f72ac4b61e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
