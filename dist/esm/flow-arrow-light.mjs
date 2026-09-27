export const name="flow-arrow-light";
export const id="dl_0458d3a3fe814412be11";
export const url=new URL("../icons/flow-arrow-light.svg?v=35fdc20d22c19cd42cc3de5b8dba4cabbade068872242d14ac6647fcc8f65b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
