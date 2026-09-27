export const name="arrows-in-simple";
export const id="dl_1338693d412244a9b6a6";
export const url=new URL("../icons/arrows-in-simple.svg?v=5bb94e1d97d6b238b1a4e54e9afbe04944040443a00a0050809015ee1c1da659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
