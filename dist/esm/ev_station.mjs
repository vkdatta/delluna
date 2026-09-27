export const name="ev_station";
export const id="dl_53b3f28a8f2868bc0f95";
export const url=new URL("../icons/ev_station.svg?v=7728f8b460840ad8238c825180413814910d9d1826997ba1c6309e48fc4f55a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
