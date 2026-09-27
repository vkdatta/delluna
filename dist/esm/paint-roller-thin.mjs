export const name="paint-roller-thin";
export const id="dl_9a396e4fbd914947ab1a";
export const url=new URL("../icons/paint-roller-thin.svg?v=d10e07a19e08890f933e6e876196e0a7498bc574fc246ae415148a0bbe482264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
