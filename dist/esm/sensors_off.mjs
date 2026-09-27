export const name="sensors_off";
export const id="dl_9190cb30aa5c1d3a853a";
export const url=new URL("../icons/material_symbols/sensors_off.svg?v=cada247963cd259c7399f27328e84554a77d6d4bf1bfcc88f8b674b386918649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
