export const name="bus-bold";
export const id="dl_ecd5b43d21084592b46e";
export const url=new URL("../icons/bus-bold.svg?v=15d8372adca7506f88b4edd3f065be4f7d35d088165ed0f4775ba294914b7ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
