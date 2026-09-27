export const name="arrow-elbow-left-up-light";
export const id="dl_47ac53e34df0497eb3fe";
export const url=new URL("../icons/arrow-elbow-left-up-light.svg?v=b969ef79e6f0d89a943b048577a62de0b0cb63ccf079cbf4ab0e3c3099f6aa76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
