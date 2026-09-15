export const name="computer_cancel-fill";
export const id="dl_58a3b3be2b2944a398d3";
export const url=new URL("../icons/C/computer_cancel-fill.svg?v=8904ef28202fd3bd43d721d8b90bb663b693387d6449cf772fd20eb22e403a9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
