export const name="dice-three-bold";
export const id="dl_95868066f92c46dbac8d";
export const url=new URL("../icons/dice-three-bold.svg?v=adcab81636e8f54bb12824ebbcff7b599071457432c9ef06aefc9f7e543d4944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
