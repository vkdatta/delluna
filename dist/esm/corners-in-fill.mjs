export const name="corners-in-fill";
export const id="dl_1ada138629b74f76ae1d";
export const url=new URL("../icons/corners-in-fill.svg?v=9a70fe828db4a807b3506abe12e8006f68e34c017f2ca27f3d3b3d3200222481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
