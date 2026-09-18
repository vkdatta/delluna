export const name="position_bottom_left";
export const id="dl_9582b616a8e64996bcfa";
export const url=new URL("../icons/P/position_bottom_left.svg?v=a663bba03833fe83b09f9e576d5df97ca5af68e51140ae424d4998c844ad92e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
