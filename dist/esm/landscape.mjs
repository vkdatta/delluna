export const name="landscape";
export const id="dl_9b3c352ed9c749a291c7";
export const url=new URL("../icons/L/landscape.svg?v=6146051f98793494a81fd9afd316d448a9b1799aea3a18852ec731c8ac2d0160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
