export const name="gynecology-fill";
export const id="dl_be3e6acef77a4c658ec5";
export const url=new URL("../icons/gynecology-fill.svg?v=45c94b8180a507d97c6f6035e80c6403c1bb9343a9540d3c2329999b192114a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
