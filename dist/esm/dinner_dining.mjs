export const name="dinner_dining";
export const id="dl_732f330d3914815ab152";
export const url=new URL("../icons/dinner_dining.svg?v=1b9533e8f4dc2668ed3d602464024ce2069a3f75810f73241651c846976cd2c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
