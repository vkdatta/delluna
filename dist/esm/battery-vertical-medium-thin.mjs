export const name="battery-vertical-medium-thin";
export const id="dl_051f5750e48340a8a448";
export const url=new URL("../icons/battery-vertical-medium-thin.svg?v=0eb3728f64a462bc208c5b7055244b044b7081f53456910d6175d7c95694bcba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
