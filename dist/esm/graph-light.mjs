export const name="graph-light";
export const id="dl_e0a9c9a563f549ffb1b3";
export const url=new URL("../icons/graph-light.svg?v=a2f9c54c12713ab8b3a9e04fe905ab97bde55d66cada5bf7c3005230746922d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
