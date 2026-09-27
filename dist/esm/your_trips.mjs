export const name="your_trips";
export const id="dl_844026971b957174ca0e";
export const url=new URL("../icons/your_trips.svg?v=279a910a18b35708cac4a8c478d5c66b4d84b34749c7dcf28bc27f5d0b10e124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
