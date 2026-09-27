export const name="number-circle-eight";
export const id="dl_1bd0d1cebc09415396fa";
export const url=new URL("../icons/number-circle-eight.svg?v=4da6daf08c23dfca4b582853c52edbd202631a2bac8430519001191ecd025598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
