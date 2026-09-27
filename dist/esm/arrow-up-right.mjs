export const name="arrow-up-right";
export const id="dl_7a850e50548341cab407";
export const url=new URL("../icons/arrow-up-right.svg?v=27e099a5aa28facfa0e9745de5593e3b6f8f9e33ad5ff3602f13705f61a856d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
