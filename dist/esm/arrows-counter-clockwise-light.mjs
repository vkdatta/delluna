export const name="arrows-counter-clockwise-light";
export const id="dl_451f30189dd24163aee0";
export const url=new URL("../icons/arrows-counter-clockwise-light.svg?v=8b87a0907e8991678677ed64bb0cd544e87cf049c60933aa74319925e068d2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
