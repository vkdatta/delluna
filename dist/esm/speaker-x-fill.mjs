export const name="speaker-x-fill";
export const id="dl_d3a74958505d473795eb";
export const url=new URL("../icons/S/speaker-x-fill.svg?v=4e2c61df33c6bd8ab057af07f268c807ca08fedceaa127825e5dcb6e8148d509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
