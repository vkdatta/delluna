export const name="tram-fill";
export const id="dl_97be96ae01fe40599330";
export const url=new URL("../icons/T/tram-fill.svg?v=573e0ac40ddf80c8f7553203d690ecaab14085b33b9e2958a70ac1546cb3b9d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
